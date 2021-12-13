---
title: First Experiences with Material UI
description: In this post, I'll be talking about my first experiences with it and some of the benefits and challenges I've found while getting started.
image: first-experiences-with-material-ui.jpg
tags: [react, mui]
published: true
---

I have recently started learning and playing around with [Material UI](https://mui.com/) for an upcoming project. In this post, I'll be talking about my first experiences with it and some of the benefits and challenges I've found while getting started.

<Gif
	src="https://media.giphy.com/media/1zgOBEmZk2M8vSJxqD/giphy.mp4"
/>

## What is Material UI?
Before we can talk about the Material UI (or MUI) library, we should talk about [Material design](https://material.io/design/introduction). According to the website, "Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web."

> Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web.

In other words, Material is a set of ideas and standards to help make things using the system more consistent and accessible. The Material UI library takes this concept and provides prebuilt React components using this design system along with the ability to customize the styles.

Since I have been learning more about accessibilty and trying to take a more accesssibility first approach to building user interfaces, the idea that this comes built-in to the library (for the most part) is very appealing. Now that you know more about what MUI is, let's get into building things with it!

## First steps: Installation
Installing MUI is just like installing any other library using NPM or Yarn. It does have some dependencies which need to be installed alongside it. By default, MUI uses [Emotion](https://emotion.sh/docs/introduction) for styling. To get MUI and Emotion installed in your project, you can run this command in your terminal:

```bash
npm i @mui/material @emotion/react @emotion/styled
```

Personally, I am more comfortable with [Styled Components](https://styled-components.com/) than Emotion so when the docs mentioned the ability to [use Styled Components](/blog/how-to-use-styles-in-a-react-js-application/) instead, so I initially decided to try that. It did not go well.

At first, I was [using Parcel to bundle my package](/blog/parcel-js-who-says-bundling-needs-to-be-difficult/) since it was quick and easy to set up for a playground. There was not any configuration for this [in the documentation](https://mui.com/guides/styled-engine/) and since it's just an exploration into MUI didn't feel worth the trouble to figure out the proper configuration. As a result, I scrapped Parcel and started looking into Create-React-App and Next since examples were provided for those.

Create React App proved more difficult than I expected to configure because for some reason the webpack config change wasn't working. Next I tried... well... Next. I got it up and running without too much trouble and started building. After having more discussions with others working on the project, we opted to just go with the default Emotion configuration.

Knowing this, it was very easy to spin up a Create React App environment and just run the command above to install my packages. There are also icons which can be used and to install this you will have to run the following command.

```bash
npm i @mui/icons-material
```

After running these commands, I was off to the races.

## Getting to know the MUI components
If you've ever used something like React-Bootstrap or Chakra, Material UI won't feel much different. Out of the box, MUI provides styles and comoponents which can be used around the site. While I don't have an extensive knowledge about these components, I did try to build a few things with them. Below I'll share some thoughts about the ones I've used.

### The Card component
Cards have become very popular UI elements on sites ranging from social media to news sites and even on online shops. MUI makes it really easy to get a card component working. There are a few different pieces to it along with some props to pass in, but overall it's much faster and easier than coding something from scratch.

The `Card` component is really made up of the Card component itself as well as a few sub-components. The sub-components are all optional but can change the appearance depending on which ones you use. I thought this was pretty neat and was definitely useful while building things out.

<Gif src="https://media.giphy.com/media/CWKcLd53mbw0o/giphy.mp4" />

### The Paper component
I spent a while looking at the `Paper` component, not because it's particularly complicated but because I don't understand the use case. From what I can gather, it adds a `div` to the DOM and gives it a box shadow. This seems like it would be really easy to do with normal html and css, so I'm not sure what real value this component adds.

### The Typography component
Material UI also includes a component called `Typography` which is used for text. It makes it really easy to add text of several different variants and types to your code. Something I haven't figured out is whether there's a way to apply text styles to normal HTML without the uses of a Typography component.

Currently, if I just put an `h1` tag in the DOM it renders that heading with browser styles. By using the Typography component, the Material styles are applied to the heading. This leads me to my first (and possibly biggest) concern.

## Global Styles
While I know there's a `GlobalStyles` component to add your own styles to the project, I'm having trouble figuring out how to apply the Material UI styles to standard HTML. If I'm coding everything myself, using Typography component isn't a problem. The issue arises when using a WYSIWYG editor which outputs plain HTML. How do I make sure that this output looks the same as code I have written with the Typography component?

<Gif src="https://media.giphy.com/media/e1s8C0YnnfjlRf7mEr/giphy.mp4" />

Obviously, I could just write some global styles which duplicates that of the MUI components but this seems tedious. In addition, this means I have to manage any customizations to the theme on my own if I want those changes to be global.

<EmailSignup />

## Conclusion

Despite the concern around the global styles, MUI seems to be a pretty solid foundation for a project built with React. I will continue to use it and learn more, so be sure to check in to look for updates around MUI!

Have any suggestions around Material UI? Feel free to reach out to me on Twitter at [@iam_timsmith](https://www.iamtimsmith.com/iam_timsmith).
