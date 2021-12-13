---
title: Software Engineer
description: Tim Smith is a software engineer focused on making the web a more enjoyable place to be
image: ../images/timsmith-social.jpg
---

<section style="margin: var(--spacing-8) var(--spacing-0)">

# Hi, my name is **Tim Smith** and I'm a **Software Engineer**.

</section>

<Bio />

## Recent Posts

<BlogList posts={props.data.posts.nodes} />

<Link to='/blog'>View more posts &rarr;</Link>

import {graphql} from 'gatsby';
export const pageQuery = graphql`
  query HomePageQuery($filters: MdxFilterInput!) {
    posts: allMdx(
      filter: $filters
      sort: { fields: fileAbsolutePath, order: DESC }
      limit: 6
    ) {
      nodes {
        frontmatter {
          title
					published
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;
