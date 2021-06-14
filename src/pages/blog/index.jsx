import React, {useState} from 'react';
import {graphql} from 'gatsby';
import Layout from '../../components/layout';
import Posts from '../../components/posts';
import Pagination from '../../components/pagination';

const BlogPage = ({data}) => {
  const numOfPosts = 5;
  const pageCount = Math.ceil(data.posts.nodes.length / numOfPosts);
  const [page, setPage] = useState(0);

  const paginate = (decrement = false) => {
    if (decrement) {
      setPage(page > 0 ? page - 1 : 0);
    } else {
      setPage(page < pageCount - 1 ? page + 1 : page);
    }
  };

  return (
    <Layout>
      <h1>Blog</h1>
      <Posts
        posts={data.posts.nodes.slice(
          page * numOfPosts,
          page * numOfPosts + numOfPosts
        )}
      />
      <Pagination page={page + 1} totalPages={pageCount} paginate={paginate} />
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    posts: allMdx(
      filter: {slug: {regex: "/blog/./i"}, frontmatter: {published: {eq: true}}}
      sort: {fields: fileAbsolutePath, order: DESC}
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;

export default BlogPage;
