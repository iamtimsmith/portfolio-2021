---
title: Getting started with React Hooks
description: Today I'll be showing you how to use some of the more common hooks provided by React as well as how to create your own custom hook.
image: getting-started-with-react-hooks.jpg
tags: [react, basics]
published: true
---

A few years ago I wrote a post about [class components vs stateless functional components](/blog/class-components-vs-stateless-functional-components/) and why you should use each one. At the time of writing, those were the two types of components and many developers yearned for a way to use functional components with state and lifecycle methods.

Back in "the old days", you'd have to use a class component if you wanted access to state or lifecycle methods. This led to either a lot of unnecessary class components just in case they ever needed state or a lot of time [converting stateless functional components over to class components](/blog/how-to-create-a-component/) because the requirements for the functional component changed and required something only a class component could offer.

<Gif
	src="https://media.giphy.com/media/4cuyucPeVWbNS/giphy.mp4"
	alt="Nope. Don't like that."
/>

Fortunately, the team behind React heard these complains and took action. With the release of React 16 came something called "hooks". These hooks allow you to use state, a lifecycle method, and much more from a functional component! Today I'll be showing you how to use some of the more common hooks as well as how to create your own custom hook.

## The useState hook
Perhaps the most commonly used hook is the `useState` hook which is used to create a state item. From the hook, you get the data itself from state as well as a method to update the state. Below is an example of how to use the `useState` hook in a component:

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Number of Clicks: {count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click Me!
			</button>
		</div>
	);
}
```

The code above is a simple example to show how this hook works. First, import the `useState` named variable from the React library (or you can just use `React.useState` if you prefer). Next, you're going to create a const which receives an array of variables: the first is the data itself from the state and the second is the method to update the data within this state item. The names are arbitrary and should be representative of whatever data you're storing. The standard convention for the method name is to begin with `set` followed by the camel-case name of your data variable.

Once you have the state created, you can use the data variable (in our example it is `count`) to output the data and the update method (`setCount` in the example) to change state. The argument passed into the update method is the value to which the state should be set.

Congratulations! You just used your first hook!

### Using TypeScript with useState
When using TypeScript in your project with strict set to `true` in your `tsconfig.json` file, you will likely get an error about not being able to use a variable with a possible `undefined` value. The solution to this is to set the expected type when calling the useState hook. The code below shows how to do this on the highlighted line.

```tsx{4}
import React, { useState } from 'react';

const MyComponent = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<p>Number of Clicks: {count}</p>
			<button onClick={() => setCount(count + 1)}>
				Click Me!
			</button>
		</div>
	);
}
```

## The useEffect hook
The second most used hook is likely the `useEffect` hook which gives us access to a lifecycle method. In a class component, there are a handful of lifecycle methods you can use to make things happen at various points during the component's "lifecycle". Among the most commonly used were `componentDidMount` and `componentDidUpdate` which would allow you to do something after the component had loaded and rendered.

<Gif
	src="https://media.giphy.com/media/XfDiixCqdH7OrEBg5z/giphy.mp4"
	alt="The useEffect hook runs when the component is done rendering"
/>

The `useEffect` hook replaces these two lifecycle methods and allows you to do things after the component has rendered. It also allows us to pass in dependencies which determines when the hook will run which will help with performance. It's also worth mentioning that there can be more than one `useEffect` hook in a component to accomodate changes for different dependencies. The code below illustrates how to use the `useEffect` hook in a functional component:

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<div>
			<p>Is page loading? {loading.toString()}</p>
		</div>
	);
}
```

In the code above, you can see the syntax to use for a `useEffect` hook. It is a function which accepts two arguments: another function with the logic you want to run and an array of dependencies. The hook will have access to any variables within the component, so scoping isn't a problem. Looking at the example, I have set a piece of state, `loading` to true. Once the page is finished rendering, the `useEffect` hook will be called where `setLoading` is called and changes the state to false. This is useful for showing loading spinners.

### Depedencies in the useEffect hook
You may also notice I have passed an empty array as the second argument. By doing this, you can tell the `useEffect` hook you want it to run after the component is rendered but don't run again. If you wanted to make the hook listen for changes to re-run if necessary, you would just add the variable to watch in the array. I have updated the example below to contain a button which sets the `loading` state to true along with a dependency to watch so it runs each time the `loading` state is changed:

```jsx
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, [loading]);

	return (
		<div>
			<p>Is page loading? {loading.toString()}</p>
			<button onClick={() => setLoading(true)}>Reload Me!</button>
		</div>
	);
}
```

### Creating event listeners in your component
In some cases, you may need to create an event listener in your component. I have used this to create keypress events and right click events. If you need to do this in your component, it should be done in the `useEffect` hook because you must wait for the component to be rendered to access the browser variables such as `document` or `window`. Below is an example to show how you can add an event to your component.

```jsx
import React, { useEffect } from 'react';

const MyComponent = () => {
	const onKeyPress = (e) => {
		alert(`You pressed the ${e.key} key!`);
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyPress);
	}, []);

	return (
		<div>
			<p>My Component</p>
		</div>
	);
}
```

If you're doing anything with keypresses, I've found [https://keycode.info](https://keycode.info/) to be hugely helpful.

When the component unmounts, you'll see an ugly error in the console which tells you that you can't called on an unmounted component. To fix this, you can add a return function to the `useEffect` hook which will run when the component is unmounted. Added to the example above, this would look something like the highlighted lines:

```jsx{10-12}
import React, { useEffect } from 'react';

const MyComponent = () => {
	const onKeyPress = (e) => {
		alert(`You pressed the ${e.key} key!`);
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyPress);
		return () => {
			document.removeEventListener('keydown', onKeyPress);
		}
	}, []);

	return (
		<div>
			<p>My Component</p>
		</div>
	);
}
```

## The useContext hook
I will mention another hook called `useContext`, but this will not be [a comprehensive post on React context](/blog/how-to-use-react-context). I will simply show you how to use the hook in the event that you need to. First, what is Context? Along with hooks, the team behind React added a feature which allowed for global state management and called it Context. By using this tool, you can keep items in state outside of a specific component and use it where needed.

The example below assumes you have already created a context with an item called `food` in another file and already wrapped the app in the Context Provider. To use the `useContext` provider, you need the context itself. Once you've called the hook, you can use destructuring to get specific items within the context.

```jsx
import React, { useContext } from 'react';
import MyContext from './MyContext';

const MyComponent = () => {
	const { food } = useContext(MyContext);

	return (
		<div>
			<p>My favorite food is {food}!</p>
		</div>
	);
}
```

Using this hook, you can get any piece of state contained in the context and passed into the provider. This makes it really easy to have a "single source of truth" in your project without any extra libraries and without a ton of unnecessary code.

<EmailSignup />

## The useReducer hook
What if you come from a Redux background or have a more complex application which requires you to track all of your state changes? For that, React provides a `useReducer` hook where you can use (you guessed it!) a reducer for your state.

The `useReducer` hook accepts two arguments: the reducer and an initial state. From the hook, you can get an array which contains the current state for the reducer as well as a dispatch function which allows you to update the state. Because the dispatch function is always available, you don't have to use a `useEffect` hook to call it like you do with `useState`.

```jsx
import React, { useReducer } from 'react';

const initState = {
	slices: 8,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TAKE_SLICE':
      if (state.slices === 0) return { slices: 0 };
      return { slices: state.slices - 1 };
    case 'PUT_BACK':
      if (state.slices === 8) return { slices: 8 };
      return { slices: state.slices + 1 };
    default:
      return;
  }
};

const MyComponent = () => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<div>
			<p>There are currently {state.slices} slices of pizza left.</p>
			<button onClick={() => dispatch({type: 'TAKE_SLICE'})}>Take a slice!</button>
			<button onClick={() => dispatch({type: 'PUT_BACK'})}>Put the slice back!</button>
		</div>
	);
}
```

This is not so different from a simple Redux store with a reducer, so it should feel pretty familiar if you've used that library before. If you haven't used Redux, it allows you to pass an action type into dispatch which then calls the reducer. Inside the reducer, you would typically create a switch statement which listens for specific action types and updates state based on the action type it's listening for.

In the example above, it is listening for the `TAKE_SLICE` action type to reduce the `slices` variable by one (to a minimum of 0) and the `PUT_BACK` action type to increase the `slices` variable by one (to a maximum of 8).

<Gif
	src="https://media.giphy.com/media/rVMwFhvflvxAc/giphy.mp4"
	alt="Have you ever seen anything so wonderful in your entire life?"
/>

## Are there more hooks?
There are still more hooks which can be used for various purposes such as `useMemo`, `useRef`, `useCallback`, and others. If you're interested in reading more about those or you have a use case that doesn't fit with the hooks I have talked about, you can check the [React documentation for additional hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks). It talks about several additional hooks and provides examples and syntax for each one.

## Creating a custom hook
You can also create custom hooks if none of the available hooks suit your needs. To do this, you can create a function (typically started with `use`) which handles any sort of logic needed for the hook to work. Below is an example of how you can do this:

```jsx
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);

	const handleFetch = async (url) => {
		const res = await fetch(url);
		const json = await res.json();
		return json;
	}

	useEffect(() => {
		setData(handleFetch(url));
	}, []);

	return data;
}
```

The code above is a pretty basic (and not ideal) hook for fetching data to illustrate how this can be done. It takes a url, fetches data when `useEffect` runs, then returns that data. In a component, calling this hook may look something like this:

```jsx
import React from 'react';
import { useFetch } from './useFetch';

const MyComponent = () => {
	const post = useFetch('https://some-fake-site.com');

	return (
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{__html: post.content}} />
		</div>
	)
}
```

By creating a custom hook, you can extract logic from a plugin and turn it into a piece of reusable code so your components don't become a mile long and really repetitive. This certainly isn't something that needs to be used, but it is possible if it suits your use-case.

## Conclusion
In this post, I've covered many of the popular hooks in React as well as how to create your own custom hooks. Hopefully you are able to see the benefit in using these hooks and you can add them to your development tool kit. As always, if you have any questions or comments, feel free to reach out to me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith)!
