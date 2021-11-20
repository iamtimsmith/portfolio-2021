---
title: "React 101: The Basics"
description: The basics of react
image: /static/react-101-the-basics.jpg
tags: [react, basics]
published: false
---

React is one of the most in demand tools in the job market these days, but if you don't know it should you just skip it? You could, but I still think it's worth learning. I'm going to teach you some basics about react to get you started. This should be enough information to give you an understanding of what React is and how to set it up.

## What is React?

React is a JavaScript library built by Facebook which creates a virtual DOM and allows a website or web application to update (or react) based on changes in data. It has been growing in popularity since it's release in 2016, even overthrowing jQuery as the most in-demand JavaScript skill, a title which jQuery had held for about a decade.

### Why is React useful?

Part of the reason for the popularity has to do with the direction of data flow in a React application. In the past, a webpage would load the static HTML, then load the JavaScript to make changes to the page as needed. If that involved updating any data on the page, there would be a "flicker" where you'd see the original content before it was updated via JavaScript.

React was a gamechanger because it modified the paradigm to be data-driven. In a React application, the state (data) is passed into the view (HTML). When the view is changed or interacted with, an action is called which updates the state and re-renders the view with the new data. This is called unidirectional flow and can be very helpful.

<Gif
	src='https://media.giphy.com/media/26DMX0rWhOZhYsu6k/giphy.mp4'
	alt='This has all been very helpful. Thank you.'
	width={300}
/>

## How to set up a React project

When React first came out, setting up a project was a headache. There weren't any tools or starter projects out there to get things up-and-running very quickly so things like Webpack had to be configured manually each time. Since then, several projects have come out which make setting up a React project a piece of cake. The items I discuss below are not an exhaustive list by any means, but they are some of the more popular options. Before we get into tooling, lets go over some basics so you understand how the application interacts with the HTML on the page.

### Creating an instance of React
I have written a post about [setting up a React project using Parcel](/blog/lets-build-a-search-bar-using-react-hooks) as a bundler which can give a more detailed walkthrough about getting a React application up and running from scratch. In this post, I'm just going to provide an overview of how the project will work.

### Create-React-App

### Using Next.js for a project

### Using Gatsby for a project

## What are some features of React?

### JSX vs CreateElement

### State Management

## The React Ecosystem

### Library vs Framework

### Required Libraries

### Other popular libraries

#### Routing

#### Testing

#### Styles

## Conclusion

