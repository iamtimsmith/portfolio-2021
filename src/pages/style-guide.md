import { StyleGuidePage } from '../styles/style-guide';

<StyleGuidePage>

# Style Guide
This page contains information about colors, typography, and other elements on the site in one convenient location. It will be deleted in production builds, so you don't have to worry about visitors finding this page.

## Typography
---
Below are the styles for heading tags and paragraph styles.

# This is a heading
## This is a heading
### This is a heading
#### This is a heading
##### This is a heading
This is a paragraph

<br/>

## Colors
---
Below are the colors for the currently selected theme.

**Shades of Grey**
<div className='style-guide__colors'>
	<div className='style-guide__swatch grey-50'>Grey 50</div>
	<div className='style-guide__swatch grey-100'>Grey 100</div>
	<div className='style-guide__swatch grey-200'>Grey 200</div>
	<div className='style-guide__swatch grey-300'>Grey 300</div>
	<div className='style-guide__swatch grey-400'>Grey 400</div>
	<div className='style-guide__swatch grey-500'>Grey 500</div>
	<div className='style-guide__swatch grey-600'>Grey 600</div>
	<div className='style-guide__swatch grey-700'>Grey 700</div>
	<div className='style-guide__swatch grey-800'>Grey 800</div>
	<div className='style-guide__swatch grey-900'>Grey 900</div>
</div>
<br/>

**Accent Colors**
<div className='style-guide__colors'>
	<div className='style-guide__swatch accent-50'>Accent 50</div>
	<div className='style-guide__swatch accent-100'>Accent 100</div>
	<div className='style-guide__swatch accent-200'>Accent 200</div>
	<div className='style-guide__swatch accent-300'>Accent 300</div>
	<div className='style-guide__swatch accent-400'>Accent 400</div>
	<div className='style-guide__swatch accent-500'>Accent 500</div>
	<div className='style-guide__swatch accent-600'>Accent 600</div>
	<div className='style-guide__swatch accent-700'>Accent 700</div>
	<div className='style-guide__swatch accent-800'>Accent 800</div>
	<div className='style-guide__swatch accent-900'>Accent 900</div>
</div>
<br/>

## Other elements

Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing.

> This is a block quote to see what that looks like in the context of a blog post.

You're all clear, kid. Let's blow this thing and go home! Escape is not his plan. I must face him, alone. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.

```jsx
import React from 'react';

const SampleComponent = () => {
	return (
		<div>
			Hello There!
		</div>
	);
}

export default SampleComponent;
```

Escape is not his plan. I must face him, alone. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. What?! No! Alderaan is peaceful. We have no weapons. You can't possibly…

| Title | Description |
| ----- | ----------- |
| This is a title | This is a description |
| This is a title | This is a description |

I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan--

- This is an unordered list
	- This is a list item

1. This is an ordered list
	- This is a list item

## Components

**Bio**

A component which displays information about the author. Accepts a `showAuthor: boolean` prop. The data used in the component comes from the `gatsby-config.js` file in the siteMetaData section.

<Bio showAuthor/>

```jsx
<Bio showAuthor/>
```

**Email Signup**

A component to offer a signup form for users. This integrates with Mailchimp. Accepts a `title: string` prop which changes the title for the section.

<EmailSignup />

```jsx
<EmailSignup />
```

**Gif**

A component which renders gifs as videos. Accepts `src: string`, `alt: string`, and `width: number` props.

<Gif src='https://media.giphy.com/media/5YzYeVe6cEzrG/giphy.mp4' alt='Max singing "Stand Out" by Powerline' width={300} />

```jsx
<Gif
	src='https://media.giphy.com/media/5YzYeVe6cEzrG/giphy.mp4'
	alt='Max singing "Stand Out" by Powerline'
	width={300}
/>
```

**Seo**

A component to change the meta tags and other seo information about a page. Accepts a `title: string`, `description: string`, and `image: string`. Image should be a reference to an item in the `/static` folder.

<Seo
	title='Style Guide'
	description='A page to show styles, components, and other useful information at a glance.'
	image='/deck.jpg'
/>

```jsx
<Seo
	title='Style Guide'
	description='A page to show styles, components, and other useful information at a glance.'
	image='/deck.jpg'
/>
```

</StyleGuidePage>
