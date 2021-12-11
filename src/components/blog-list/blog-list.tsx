import React from 'react';
import { Link } from 'gatsby';
import { BlogListItems, BlogPost, BlogPostTitle } from './blog-list.style';
import { BlogListProps, PostTeaser } from './blog-list.i';

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <BlogListItems>
      {posts.map((node: PostTeaser, key: number) => (
        <BlogPost key={key}>
          <BlogPostTitle>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
          </BlogPostTitle>
          {node.frontmatter.published === false && (
            <span className='draft'> - Draft</span>
          )}
          <p>{node.excerpt}</p>
        </BlogPost>
      ))}
    </BlogListItems>
  );
};
