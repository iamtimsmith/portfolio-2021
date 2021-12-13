---
title: How to use React Context
description: In this post, I'll show you how to set up and use React Context in your next project
image: how-to-use-react-context.jpg
tags: [react, basics]
published: true
---

Have you ever had to pass a piece of state three or four levels deep along with a method to update the state? If so, you have likely either suffered in silence or looked into libraries such as Redux. The team behind React heard these complaints from the community and decided it was high time they created an out-of-the-box solution for this. Their solution is a part of the React library and is called "Context". In this post, you'll learn how to set up and use Context in your project.

<Gif
	src="https://media.giphy.com/media/5SBPr8uRojC3D2pW96/giphy.mp4"
	alt="Context."
/>

## Life before context
Before getting into Context, I'd like to explain the problem that context solves for anyone who is newer to React. Back in "Ye Olden Times" before global state management, you had two options for state that was used in different places: keep state in the top-most component and pass it down or manage state in each component that needed it by writing the same code in each component.

The latter solution is bad because it means writing duplicate code all over. This is a pain (and can be dangerous) because if you have to update that logic down the road, you may miss a spot where the code is duplicated and then there's a divergence in your logic. **We want to avoid this.**

<Gif
	src="https://media.giphy.com/media/3ohuAwaX6Q13W78tdS/giphy.mp4"
	alt="Brennan, a.k.a. Nighthawk, agrees that you shouldn't do this."
/>

The first option presented doesn't sound too bad until you have a complex application with several children and grandchildren. Then if a great grandchild needs the state (or the ability to change the state) in the topmost component, it has to be passed down through each level even if it's not being used by the other levels. To illustrate, I'll give an example below:

```jsx
const React, { useState } from 'react';

const IncreaseButton = ({count, setCount}) => {
	return (
		<button
			onClick={() => setCount(count + 1)}
		>
			Increase value to {count + 1}
		</button>
	)
}

const DecreaseButton = ({count, setCount}) => {
	return (
		<button
			onClick={() => setCount(count - 1)}
		>
			Decrease value to {count - 1}
		</button>
	)
}

const Clicker = ({count, setCount}) => {
	return (
		<div>
			<IncreaseButton count={count} setCount={setCount}/>
			<DecreaseButton count={count} setCount={setCount}/>
		</div>
	)
}

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>{count}</p>
			<Clicker count={count} setCount={setCount} />
		</div>
	);
}
```

In the ~~completely impractical~~ example above, you can see that I have a state which is being passed into a button container called `Clicker` which renders two buttons with their own logic which uses the `count` and `setCount` variables. You can also see that `Clicker` isn't doing anything with the `count` and `setCount` data, but it still has to be passed through to reach the components that need it.

While this isn't a particularly realistic example, these sorts of things became a very common practice prior to global state management tools. Because of this, tools like Redux became very popular even though in most cases it was probably overkill. As a result, the engineers at Facebook came up with an elegant solution to solve the global state problem with as little complexity as possible and called it Context.

## How to create a context
Creating a context is pretty simple. All you need to do is import the method and assign it to a variable. Just like that, you're done!

```jsx
import {createContext} from 'react';

const MyContext = createContext();
```

If you're using TypeScript, you will also need to set types for your Context, so React knows what to expect.

```tsx
import {createContext} from 'react';

interface IMyContext {
	...
}

const MyContext = createContext<IMyContext>();
```

Congratulations! You have created your first context!

## What's a Context Provider?
Good question! A context provider provides the context.

Okay, okay. That was a pretty corny joke. For real though, they couldn't have chosen a better name for this piece. The context provider is a component which wraps anything you'll need context in to "provide" the context to those components.

One of my favorite ways to do this is to include it as a component in the same file as the context itself, which makes it easy to know where to find it.

```jsx
// MyContext.jsx
import React, {createContext, useState} from 'react';

export const MyContext = createContext({
	count: 0,
	setCount: () => {},
});

export const MyContextProvider = ({children}) => {
	const [count, setCount] = useState(0);

	return (
		<MyContext.Provider value={{count, setCount}}>
			{children}
		</MyContext.Provider>
	)
}
```

Although this is how I do it, you could just as easily put a provider wherever you'd like. The only required prop for the provider is `value` which could be any type of data if you're only using 1 piece of data in your context. For more than one item in your context, you need to pass it as an object which should match the stuff in your context. For instance, in the example above, the `MyContext` object is expecting a count and a setCount key. The `value` in the provider has an object with the same count and setCount keys being set.

## Using the Context Provider
The next step when using Context in your project is to wrap any components (and their children) in the provider. In the example below, I will assume that every component should have access to my context so I will put it in the `App.jsx` (topmost) file.

```jsx
import React from 'react';
import { MyContextProvider } from './MyContext';

const App = ({ children }) => {
	return (
		<MyContextProvider>
			{children}
		</MyContextProvider>
	);
}
```

Now that the provider is wrapped around everything else in your app, all of the things in your app know about the context. You're ready to start using your context!

<EmailSignup />

## How do I use context?
So you have your context created and your components inside the provider...now what? Now you can get the data from context and use it wherever you need it. There are a few different ways to do this, so I'll show you both.

### Using a consumer
The first way to do this is to use something called a consumer. This is created using the context and should wrap the comoponent you'd like to use the context in, which will give you access to the context variables. **Only this method will work inside of class components**. The code below shows how this will work with the context I set up in previous examples.

```jsx
import React from 'react';
import { MyContext } from './MyContext';

const MyComponentWithContext = () => {
	return (
		<MyContext.Consumer>
			{(context) => (
				<p>The current count is {context.count}</p>
			)}
		</MyContext.Consumer>
	);
}
```

If you'd prefer, you can also use destructuring inside the consumer to only get the stuff you actually want to use. The highlighted code below shows the code that would be different by doing this.

```jsx{7-9}
import React from 'react';
import { MyContext } from './MyContext';

const MyComponentWithContext = () => {
	return (
		<MyContext.Consumer>
			{({count}) => (
				<p>The current count is {count}</p>
			)}
		</MyContext.Consumer>
	);
}
```

### The useContext hook
In my last post, I talked about [many of the different hooks that are available in React](/blog/getting-started-with-react-hooks). They have become the more common way to do things because they allow you to write ~~everything~~ most things as functional components.

When using the `useContext` hook, you still need to make sure you're inside the provider, but you don't have to mess around with consumers anymore. Like the consumer, you can use destructuring with the `useContext` hook to only get the variables you need. If I refactor the component from above to use the `useContext` hook, it looks like this:

```jsx
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const MyComponentWithContext = () => {
	const {count} = useContext(MyContext);

	return (
		<p>The current count is {context.count}</p>
	);
}
```

To use this hook, you import it from React, import the specific context you're getting data from, and tell it what data you want from the context. To me, this solution looks much cleaner and has better readability but it's totally personal preference when using functional components.

## What if I have multiple contexts?
If you need more than one context, that's not a problem. You can have as many as you'd like. You will just need to wrap the providers around the components that need the data. This may look like the example below if you have more than one context:

```jsx
import React from 'react';
import { MyFirstContextProvider } from './MyFirstContext';
import { MySecondContextProvider } from './MySecondContext';
import { MyThirdContextProvider } from './MyThirdContext';

const App = ({ children }) => {
	return (
		<MyFirstContextProvider>
			<MySecondContextProvider>
				<MyThirdContextProvider>
					{children}
				</MyThirdContextProvider>
			</MySecondContextProvider>
		</MyFirstContextProvider>
	);
}
```

Assuming that you've wrapped your whole app in the providers, you can now use the context from any of these providers in any component. The only other thing to watch out for is which context you're importing when using the consumer or hook. If you need to get data from `MySecondContext`, then you need to be sure and use that specific context when creating the consumer or calling the `useContext` hook.

## Conclusion
React Context is a game-changer if you need to reuse the same data all over the application. It adds a ton of flexibility without adding additional libraries or lots of complexity. Try it out in your next project and let me know what you think! You can find me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
