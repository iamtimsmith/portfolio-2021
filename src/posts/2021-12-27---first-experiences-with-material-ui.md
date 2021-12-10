---
title: First Experiences with Material UI
description: Sample description
image: gatsby-astronaut.png
tags: [react, mui]
published: false
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
