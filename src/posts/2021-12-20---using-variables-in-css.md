---
title: Using Variables in CSS
description: In this article, I'll teach you how to use variables in your css files and what the limitations are.
image: using-variables-in-css.jpg
tags: [css, basics]
published: true
---

When I was first starting to learn web development, I remember being annoyed with writing the same hex code for a color over and over then finding out the color had to change and searching through code to find every instance. It was a huge pain! At the time, this was one of the pain points that made [css preprocessors like Sass](/blog/how-to-use-styles-in-a-react-js-application) and Less so appealing since they allowed you to use variables in your styles.

<Gif src="https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.mp4" />

Fortunately, we live in a golden age of technology for web development where smart and passionate people are pushing the boundaries of what our tooling can do. As such, engineers have been hard at work making improvements to plain old css. One such improvement is the ability to use variables within your `.css` files! In this article, I'll teach you how to use variables in your css files and what the limitations are.

## Why are CSS variables important?
If you've been writing css for a while (or haven't), I'm sure you've encountered a file with the same color value peppered in throughout the code. Even worse is when you have the same value used across several files. Simply having them there isn't such a big deal, but what if you need to change them down the road? You'll have to find every instance of that color and change it manually. It also means that if you are going to do something like a light and dark theme, you'll havae to write duplicate code for each theme based on class. Consider the code below:

```css
body.light {
	background: #fff;
	color: #ff0000;
	font-size: 16px;
}

body.light button {
	background: #ff0000;
	color: #fff;
	border: 1px solid #ff0000;
}

body.dark {
	background: #222;
	color: #c0ffee;
	font-size: 16px;
}

body.dark button {
	background: #c0ffee;
	color: #222;
	border: 1px solid #c0ffee;
}
```

Obviously the code above wouldn't be _that_ big of a deal to change, but if this file continued on and on with these colors you can imagine why it would be useful to make a change in one place and have it update everywhere. The code below shows how this code can work with variables.

```css
body {
	background: var(--primary);
	color: var(--secondary);
	font-size: 16px;
}

button {
	background: var(--secondary);
	color: var(--primary);
	border: 1px solid var(--secondary);
}
```

You can see how concise the code is in the example. Because the values for variables can be reassigned, the `--primary` variable can be changed based on the body class rather than duplicating code with different values.

## How to set up variables in CSS
To create a variable in your CSS, you need to decide what the scope of the variable will be. Variable creation is the same regardless of the scope, so the code below will apply anywhere although the selector may be different.

```css
.sample-selector {
	--color: purple;
}
```

The example above shows how you can create an element with the `sample-selector` class. You will be able to access the `--color` variable from any child of the `.sample-selector` element. You can also create global css variables by using the `:root` selector which targets the `html` element. The `--color` assignment using the root selector would look like this:

```css
:root {
	--color: purple;
}
```

Since the variable is assigned to the root element, you can use it anywhere in the styles with no problem. Going back to the idea of using themes, you could set a different variable value based on what class is assigned to the html element. That would look like this:

```css
:root.light {
	--primary: #fff;
	--secondary: #ff0000;
}
:root.dark {
	--primary: #222;
	--secondary: #c0ffee;
}
```

By using CSS variables in this way, you don't have to add styles for both light and dark themes on each element. Instead, you can use and reuse a variable with a different value based on the theme class assigned to a given element.

<EmailSignup />

## Once my variables are created, how do I use them?
Using variables is very quick and easy. To call a variable, you use the `var()` function which is now built in to the CSS language. The first parameter is the name of the variable you'd like to use. For instance, the example below shows how to use a variable called `--text-color`.

```css
.thing {
	color: var(--text-color);
}
```

More often than not, you'll just see it used like this. There is, however, a second optional parameter you can pass in to the function. The second parameter is a fallback value in case the variable isn't set. You can see what a `var()` call with a variable and a fallback value looks like below:

```css
.thing {
	color: var(--text-color, #333);
}
```

## Are there any limitations?
Although css variables have solved a lot of problems for front-end developers, it is not without flaws. If you've spent time writing SCSS or something similar, you may have used variables and mixins to handle media queries. This cannot be done with CSS variables which is a bit of a bummer. In addition, CSS variables can't store a url. This would be useful if you had to reuse an image in different places, but it doesn't work.

<Gif
	src="https://media.giphy.com/media/hGUsHFdmERpc1VpoCA/giphy.mp4"
/>

### Browser Support
Thanks to modern browers, you can use CSS variables with all browsers except IE11. That means if you have to support Interent Explorer 11 or older browsers in general, CSS variables may not be the right choice for your project. You can [learn more about which browsers are supported here](https://caniuse.com/css-variables).

## Conclusion
Overall, CSS variables are a very cool innovation within your styles. They make it very easy to not only write reusable styles, but update them or expand on them further down the road. I highly recommend checking them out in your next project and seeing what you think about them.

Have questions? You can find me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
