---
title: Let's build a search bar using React Hooks
description: In this post, I'll show you how to build a search bar component using React Hooks to make state management, lifecycle methods, and other things a piece of cake.
image: ../images/lets-build-a-search-bar-using-react-hooks.jpg
tags: [react]
published: true
---

A few years ago I wrote an article called [Let's build a search bar in React](/blog/lets-build-a-search-bar-in-react) where I showed readers (you guessed it!) how to build a search bar in React. When I wrote that article, React Hooks didn't exist so it is written using class components. Since publishing the post, I've gotten several requests to rewrite the post showing how to build a search bar using React Hooks. After taking a break from blogging to focus on my family and being swamped with work, I'm happy to report that this is that post!

<Gif src='https://media.giphy.com/media/hZfm9Pj95F9Mk/giphy.mp4' width={300} />

In this post, I will follow roughly the same structure as the original. In my last post I used Parcel to bundle all of my packages together and build my code. Parcel has made several improvements since that post, so I will stick with that build tool for this post.

## Setting up the project

I will be using the command line interface to get my project set up. If you're new to the command line or need a refresher, I've written [a blog post which explains most of the commands I will be using](/blog/getting-started-with-the-linux-cli).

### Creating the project folder and setting up a structure

To get started, I will be creating a project folder on my computer, then building out a file structure for my application. When [using Parcel](/blog/parcel-js-who-says-bundling-needs-to-be-difficult), you can choose how you want your project to be structured so I'm going to stick with the structure detailed below. First, the commands to set it up:

```bash
mkdir react-hooks-searchbar && cd $_
```

This command will create the folder for the project and move you into the folder. Next, you will create the app folder and all of the starting files in your project. Note: I'm using bash, so if you're using powershell or something similar, some of these commands won't work.

```bash
mkdir app && touch .gitignore index.html app/app.jsx
```

After entering the command above, your project structure should look like this:

- app/
  - app.jsx
- .gitignore
- index.html

### Installing packages for the project

The next step is to install the dependencies for the project. For this project, I will keep it as basic as possible. Just like the first project, I will use React, ReactDOM, and Bulma for the front-end. Before you can install the dependencies for the project, you need to initiate the project.

```bash
npm init -y
```

The `-y` flag will answer yes to all of the questions asked when setting up a project with NPM, making things much quicker. Next, you need to install your dev dependencies. These are dependencies you will only be using in your development environment, so they don't need to be loaded on production.

```bash
npm install --dev parcel @babel/preset-react
```

Next you need to add the dependencies that will be used in a production environment.

```bash
npm install react react-dom bulma
```

Let's briefly talk about what each of the packages you've added is for:

- **React:** A library to speed up development (seems obvious for a React tutorial, right?) [Link](https://reactjs.org/)
- **React-DOM:** A library which allows React to interact with the DOM in a browser.[Link](https://reactjs.org/docs/react-dom.html)
- **Parcel:** A bundling library which requires no config. [Link](https://parceljs.org/)
- **@babel/preset-react:** A library which tells Parcel how to handle JSX. [Link](https://babeljs.io/docs/en/babel-preset-react)
- **Bulma:** A CSS framework that uses flexbox and is easy to use. [Link](https://bulma.io/)

### Checking out package.json and adding scripts

If you open your `package.json` file, you should see all of the dependencies listed under `dependencies` and `devDependencies`, respectively. While you have this file open, you can add scripts to run your project and babel to add babel presets. Though your versions may be different than mine when you're reading this, your `package.json` file should look similar to mine after adding the `scripts` and `babel` objects.

```json
{
  "name": "react-hooks-searchbar",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "babel": {
    "presets": ["@babel/preset-react"]
  },
  "dependencies": {
    "bulma": "^0.9.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "devDependencies": {
    "@babel/preset-react": "^7.12.13",
    "parcel": "^1.12.4"
  }
}
```

## Getting the index.html file ready

When Parcel begins to bundle the application, it's looking at the `index.html` file, which will then pull in our whole React application. Because of that, we need to fill the `index.html` file out with some code to tell it what to pull in. Overall, this will be a pretty simple html file. Once you have the file open in your code editor, you can type in `html:5` (assuming you have emmet installed) and hit tab. The code editor will populate a bunch of default code and this will be the basis for your `index.html` file.

Once you have the basic scaffolding done, you need to add a `div` with the id of `app` to the body of your structure. After the div, you will need a script tag with the `src` being the app.jsx you created earlier. This is all you need in this file, though you can change the title of the page in the head if you like. Once all of this is done, your index.html file should look like the code below.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Hooks Search</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./app/app.jsx"></script>
  </body>
</html>
```

## Setting up the React Application

Now that the `index.html` file is set up, you can get started building your application. To get started, open up your `app/app.jsx` file and add the code below. This will just display an styled h1 tag that says "Search" to make sure that the configuration is working properly.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

const App = () => {
  return (
    <div className='content'>
      <h1>Search</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`app`));
```

Now if you start the application and visit http://localhost:1234, you should see a white background with black text that says "Search". To start the application, run the following command:

```bash
npm run dev
```

While using the `dev` script, Parcel will hot-reload the application so as you make changes to the project, it will automatically reload and update the page with the changes. This is a huge time saver since you won't have to keep starting and stopping the application.

## What are React Hooks?

If you've read my previous blog posts about [React Components](/blog/how-to-create-a-component) or [Building A Search Bar with React](/blog/lets-build-a-search-bar-in-react), you've seen both [class and functional components](/blog/class-components-vs-stateless-functional-components).When those posts were written, only a class component could have a state. Since then, the React team has done a lot of work to make code much more concise and one of the ways they've achieved this is through hooks. Because of these huge improvements, it is possible to have state and lifecycle methods inside of a functional component.

While there are several hooks you can use for various purposes, I will just be focusing on one in particular. That hook is the `useState` hook, which allows you to create a piece of data as well as modify it without setting up a constructor or having to fuss with a class component.

<Gif src='https://media.giphy.com/media/9p8hgZoQjj9y8/giphy.mp4' />

<EmailSignup title='Like this post? Join my mailing list!' />

## Adding state to the App

The first step to using the `useState` hook is to import it from the `react` library. You can use it from the `React` object if you like, but I prefer to use named exports to keep the code a little cleaner. Your react import should now look like this:

```jsx
import React, { useState } from 'react';
```

Now that you have imported the `useState` hook, you can create your state item. To do this, you will create a state variable and assign it a value. In this case, you will create a variable called `list`. You will also create a variable called `setList` which will be how you manipulate the state variable when needed. These names are arbitrary and can be whatever you like, though the typical naming convention is to put "set" before the capitalized name of the state variable. The code below illustrates how to add the list state with an array of items as the default value.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

const App = () => {
  const [list, setList] = useState([
    'Go to the store',
    'Wash the dishes',
    'Learn some code',
  ]);

  return (
    <div className='content'>
      <h1>Search</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`app`));
```

As you can see the variables are set to a `useState` function with the argument being the default value. In this case, it's an array of strings, though it could be any data type including `null` or you could even leave it empty.

## Displaying and adding items

What good is having a list of items in state if the user can't see or add items in their list? The code below will show you how to display the items in an ordered list and create a field and button to add new items to the list. I am using the `map()` function here which iterates over an array and returns something. In this case the something being returned is jsx code to be rendered. The code below shows the updated code for the component.

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

const App = () => {
  const [list, setList] = useState([
    'Go to the store',
    'Wash the dishes',
    'Learn some code',
  ]);

  const addItem = e => {
    e.preventDefault();
    const item = e.target.newItem.value;
    if (item) setList([...list, item]);
    e.target.reset();
  };

  return (
    <div className='content'>
      <div className='container'>
        <section className='section'>
          <ul>
            {list.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </section>
        <hr />
        <section className='section'>
          <form className='form' onSubmit={e => addItem(e)}>
            <label htmlFor='newItem'>Task:</label>
            <input
              type='text'
              className='input'
              name='newItem'
              id='newItem'
              placeholder='Something that needs to be done...'
            />
            <button className='button is-info'>Add Item</button>
          </form>
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`app`));
```

You can see a function in the code above called `addItem` which gets the value of the input and add it to the array in state using the spread operator. Last, the function clears the data in the form so it's ready for the next task.

In the return, the component iterates over the items in the `list` array to display it for the user. When an item is added to the `list` array, the component will re-render and update the listed item with the new data.

## Deleting Items

Now that the user can add items to their to-do list, you need to give them the ability to remove them. This will be done by adding a button to the right of each list item which triggers a function to find the item in the `list` array and removing it using the JavaScript `filter` method. Once that is done, the list being displayed will update with the specified item removed.

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

const App = () => {
  const [list, setList] = useState([
    'Go to the store',
    'Wash the dishes',
    'Learn some code',
  ]);

  const addItem = e => {
    e.preventDefault();
    const item = e.target.newItem.value;
    if (item) setList([...list, item]);
    e.target.reset();
  };

  const handleDelete = item => {
    setList(list.filter(li => li !== item));
  };

  return (
    <div className='content'>
      <div className='container'>
        <section className='section'>
          <ul>
            {list.map((item, key) => (
              <li key={key}>
                {item}{' '}
                <span className='delete' onClick={() => handleDelete(item)} />
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <section className='section'>
          <form className='form' onSubmit={e => addItem(e)}>
            <label htmlFor='newItem'>Task:</label>
            <input
              type='text'
              className='input'
              name='newItem'
              id='newItem'
              placeholder='Something that needs to be done...'
            />
            <button className='button is-info'>Add Item</button>
          </form>
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`app`));
```

## Creating the Search Bar

Now that you have a functioning task list application, it's time to add the search functionality. This should be case insensitive and update in real-time. Doing this will require a search input which then uses a `filter` method on change to render only items in the list which match the search string.

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

const App = () => {
  const [search, setSearch] = useState(``);
  const [list, setList] = useState([
    'Go to the store',
    'Wash the dishes',
    'Learn some code',
  ]);

  const addItem = e => {
    e.preventDefault();
    const item = e.target.newItem.value;
    if (item) setList([...list, item]);
    e.target.reset();
  };

  const handleDelete = item => {
    setList(list.filter(li => li !== item));
  };

  return (
    <div className='content'>
      <div className='container'>
        <section className='section'>
          <input
            type='text'
            className='input'
            onChange={e => setSearch(e.target.value)}
            placeholder='Search...'
          />
          <ul>
            {list
              .filter(li => li.toLowerCase().includes(search.toLowerCase()))
              .map((item, key) => (
                <li key={key}>
                  {item}{' '}
                  <span className='delete' onClick={() => handleDelete(item)} />
                </li>
              ))}
          </ul>
        </section>
        <hr />
        <section className='section'>
          <form className='form' onSubmit={e => addItem(e)}>
            <label htmlFor='newItem'>Task:</label>
            <input
              type='text'
              className='input'
              name='newItem'
              id='newItem'
              placeholder='Something that needs to be done...'
            />
            <button className='button is-info'>Add Item</button>
          </form>
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`app`));
```

The code above adds an input and a check to see if the search string is included in any of the list items. This is not a perfect solution, but it's enough for a basic check and as a jumping off point if you need more specific functionality.

## Conclusion

Just like that, you have a search bar built using React Hooks. The whole component (including imports and ReactDOM) is 63 lines long. This is compared to the original class component version which totaled 135 lines. By switching to hooks, the component becomes more readable and cuts the amount of code in half! Your application is ready create, read, delete, and search items in a task list.

Have questions? You can find me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
