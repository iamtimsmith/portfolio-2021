---
title: Creating a better SEO component for Gatsby sites
description: In this post, I'll show you how to build a better SEO component which is optimized for both search engines and social sharing to help your marketing strategy.
image: ../images/creating-a-better-seo-component-for-gatsby-sites.jpg
tags: [react, seo]
published: true
---

When you create a new project using the default starter for Gatsby, it gives you an SEO component with some basic contents. This is good for simple things such as a favicon, page title, and description. It leaves out other important pieces that can make a site even more optimized for both search engines and social sharing. In this post, I'll show you how to build a better SEO component which can help in marketing your Gatsby site. Even if you're not using Gatsby, the things discussed in this article will provide a framework for a solid SEO component. Let's get started!

## Importing the packages we need

When creating the file for the SEO component, you should think about what you'll need the component to do. In this case, you will need the ability to create a react component, write jsx, insert information into the head of your page, and use graphql to get some data for default values. I will also be using the `prop-types` package to check for types on the incoming props.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
```

The packages above will accomplish all of the tasks I listed with flying colors. To handle the graphql query, I opted for the `useStaticQuery` hook rather than the `StaticQuery` component. That's just personal preference though, either will work just fine. Next you will create a basic component with some hard-coded data to make sure the component is working.

## Creating a hard-coded component

In the basic version of the component, you will just be setting up the helmet element with a title and description. Then you can import it into a page and make sure you're seeing the hard-coded data in your page. Below is the code for the hard-coded component.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  return (
    <Helmet>
      <title>This is a title</title>
      <meta name='description' content='This is  some content' />
    </Helmet>
  );
};

export default SEO;
```

Once the code in the SEO component is updated, you can import it into a file to make sure the title and description are changing for the page. There aren't any props to pass in yet, so it will just look like this:

```jsx
// pages/index.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <h1>This is the index page</h1>
    </Layout>
  );
};

export default IndexPage;
```

## Making the title and description dynamic

Once the SEO component is imported and rendered, you should see that the title and description for the index page says "This is a title" and "This is some content", respectively. That's pretty good, but it's not very dynamic. To fix that, you will add props for a title and description and use that to fill out the SEO component.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
```

Now that you have props for title and description, you can pass those in from the index page. Update the code for the index page with the following code:

```jsx
// pages/index.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Home'
        description='This is the homepage for a gatsby website'
      />
      <h1>This is the index page</h1>
    </Layout>
  );
};

export default IndexPage;
```

## Adding attributes to HTML element

You may want to add some elements to the html element for SEO purposes. This can be done using the `Helmet` component by adding an object with the desired attributes in the `htmlAttributes` prop. It is always a good idea to add a lang attribute to indicate the language in which the site is written. The modified code below shows how you can add attributes to the html element in the DOM.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: `en` }}>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
```

There are a [number of attributes you can add to the html element](https://www.w3schools.com/tags/ref_standardattributes.asp), all of which can be added this way. Once you have all the html attributes added that you want, it's time to customize the title a little bit more.

## Adding your first query to improve the page title

If you look at the title for your index page, it just says "Home". This is adequate, though you may want to put the site title in there so visitors know what site they're on. Here's where you need to start using queries to get data. Below, you can see the first query to get the site title and description from the `gatsby-config.js` file. This is where I will be pulling data from, though you could query WordPress data, Ghost data, or any other source. Below is the component with the query being performed through a hook. The [documentation](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/) will also show how to use the StaticQuery component to achieve the same result.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
```

Using the code above, you have a title that displays in a format like "Page Title | Site Name" and provides a fallback description in the event that none is provided by the page. Now that you have the title and description taken care of, it's time to focus on social media sharing.

## Providing a canonical URL and favicon

Providing a canonical url and a favicon in your SEO strategy can also help to build your online profile. Setting these up can be done by adding a query for the favicon and providing the slug for the current page. In addition, I will include a base url from the `gatsby-config.js` file and add a prop to pass in a slug for the current page.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <link rel='shortcut icon' href={data.favicon.publicURL} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default SEO;
```

Now when you refresh your page, you should see the favicon you selected in the browser tab you're using. If you open up the html on your site, you should also see the canonical url in the head section.

<EmailSignup title='Like this post? Join my mailing list!' />

## Adding social sharing cards

Have you ever shared a link on social media and felt disappointed when it didn't pop up with a photo, title, and excerpt? I know I have, so I want to make sure that doesn't happen when someone shares a page of mine. To do this, you need to add both twitter tags and OG tags.

<Gif src='https://media.giphy.com/media/L1Byye4j6sBSkqJTul/giphy.mp4' />

### Adding Twitter cards

When setting up up your webpage to be shared on social media sites, there are a few different "categories" of meta tags you need to know about. The first is "twitter". [According to the Twitter docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started), it will look for twitter tags first and fall back to OG tags if none are found so we will set those up first.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <link rel='shortcut icon' href={data.favicon.publicURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@iam_timsmith' />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default SEO;
```

The 2 additional lines of code above establish what [type of card you want to display](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) when the page is shared as well as what the twitter site is for the website creator.

### Adding OpenGraph tags

The next meta tags to add are called OpenGraph, or OG, tags which will provide the data for social media sites to generate the cards when your content is shared. To do this, you need to add another prop for an image and, like the title and description, add a query to get a fallback image for use if none is provided.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
      social: file(name: { eq: "timsmith-social" }) {
        publicURL
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <link rel='shortcut icon' href={data.favicon.publicURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@iam_timsmith' />
      <meta name='og:title' content={title} />
      <meta
        name='og:description'
        content={description || data.site.siteMetadata.description}
      />
      <meta
        name='og:image'
        content={`${data.site.siteMetadata.siteUrl}${
          image || data.social.publicURL
        }`}
      />
      <meta name='og:type' content='website' />
      <meta
        name='og:url'
        content={`${data.site.siteMetadata.siteUrl}/${slug}`}
      />
      <meta name='og:site_name' content={data.site.siteMetadata.title} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
};

export default SEO;
```

Now when a user shares your page on any social media site that supports OpenGraph protocols, it will generate a card with an image, title, description, and URL. Hopefully this will help to drive engagement with the link since it provides so much information before even being clicked. Because of the fall backs, if no description is provided it gives the default site description; if no image is provided, it gives the default site image. Having these fallbacks means that even if you forget to include those things, the end-user on a social media site will still get an appealing card with which to engage.

Adding the new props to the existing index page would look like this:

```jsx
// pages/index.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Home'
        description='This is the homepage for a gatsby website'
        image='https://placeimg.com/300/300'
        slug='/'
      />
      <h1>This is the index page</h1>
    </Layout>
  );
};

export default IndexPage;
```

## Using Schema.org data in SEO component

Getting into [Schema.org](http://schema.org) markup is outside the scope of this article, but I will talk about how you could implement it into a Gatsby SEO component if you wanted to. This is completely optional, so if you don't need to add this, you can skip ahead.

### What is Schema.org markup?

In a nutshell, Schema.org markup is just a way to provide more information about the data on a webpage to search engines so they can index your site in a more efficient way. It also allows the search engine to serve your page to more relevant queries, making you visible to more of the people searching for your site.

### Adding it to the SEO component

My solution to add Schema information to the SEO component is not a complex one, though it gets the job done. It is simply to add it as children of the component. The reason for this has to do with how many options are available for schemas and what the contents of those schemas look like. It would be A LOT of work to build out a component that could handle all of the possibilities for that. To make my life a little easier, I just made it possible to add whatever children the particular piece of content called for. This would make it possible to any schema desired without having to try and plan for every option or constantly add onto the SEO component whenever a schema changed or got added. The code to do this can be found below.

```jsx
// components/seo.js
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, slug, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
      social: file(name: { eq: "timsmith-social" }) {
        publicURL
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <link rel='shortcut icon' href={data.favicon.publicURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@iam_timsmith' />
      <meta name='og:title' content={title} />
      <meta
        name='og:description'
        content={description || data.site.siteMetadata.description}
      />
      <meta
        name='og:image'
        content={`${data.site.siteMetadata.siteUrl}${
          image || data.social.publicURL
        }`}
      />
      <meta name='og:type' content='website' />
      <meta
        name='og:url'
        content={`${data.site.siteMetadata.siteUrl}/${slug}`}
      />
      <meta name='og:site_name' content={data.site.siteMetadata.title} />
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
```

To help show the context in which this will be used, I will use a fake blog post as an example. Below is a component with a hard-coded title, description, image, and slug to keep things simple. These would likely come from a graphql query in a real world example.

```jsx
// templates/post.js
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = () => {
  const title = 'This is the blog post';
  const description = 'This is the content for the blog post.';
  const image = 'https://placeimg.com/300/300';
  const slug = '/this-is-the-blog-post';

  return (
    <Layout>
      <SEO title={title} description={description} image={image} slug={slug}>
        <script type='application/ld+json'>
          {`{
						'@context': 'https://schema.org',
						'@type': 'LiveBlogPosting',
						'@id': 'https://mysite.com${slug}',
						'headline': ${title},
						'description': ${description}
					}`}
        </script>
      </SEO>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  );
};

export default BlogPost;
```

The example above is a very simple example as far as schemas go, but it illustrates [how you can use the JSON-LD format to markup your blog post](<[https://schema.org/BlogPosting](https://schema.org/BlogPosting)>) data using the SEO component.

## Wrapping Up

In this post, I have talked about building a better SEO component for a Gatsby site. This includes basics like a page's title and description as well as social media aspects like OpenGraph protocols. I even touched on using Schema.org markup with the new SEO component. This is all designed to make your life easier as a developer so you aren't writing the same code for every page. Whether you're using Gatsby or good old React, this component will make your life easier and at the same time improve your site's indexability for search engines.
