import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { ImSpinner9 } from 'react-icons/im';
import { useFlexSearch } from 'react-use-flexsearch';
import { Layout } from '../components/layout';
import { BlogList } from '../components/blog-list';
import { EmailSignup } from '../components/email-signup';
import { Seo } from '../components/seo';
import { SearchPageProps } from '../types/search.i';

const SearchPage = ({ data, location }: SearchPageProps) => {
  const [loading, setLoading] = useState(true);
  const qs = new URLSearchParams(location.search);
  const query = qs.get('q') || '';
  const results = useFlexSearch(query, data.s.index, data.s.store);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Layout>
      <Seo title={`Search results for "${query}"`} />
      {(!!loading && (
        <div
          style={{
            padding: `100px 0`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: `column`,
          }}
        >
          <h1>Searching...</h1>
          <ImSpinner9
            style={{
              fontSize: `var(--font-size-xl)`,
              animation: `spinner 1.3s infinite linear`,
            }}
          />
        </div>
      )) || (
        <>
          {(typeof results === 'object' && results.length > 0 && (
            <>
              <h1>
                Search results for <strong>"{query}"</strong>
              </h1>
              <BlogList posts={results} />
            </>
          )) || (
            <>
              <section
                style={{
                  margin: `var(--spacing-16) 0 var(--spacing-24)`,
                }}
              >
                <h1>Hmmmmm...</h1>
                <h3>
                  There weren't any results for <strong>"{query}"</strong>.
                </h3>
                <p>
                  Double check your search for any typos or spelling errors or
                  try a different search term.
                </p>
              </section>
              <p
                style={{
                  fontSize: `1.6rem`,
                  fontWeight: 700,
                }}
              >
                You may also like:
              </p>
              <BlogList posts={data.posts.nodes} />
            </>
          )}
        </>
      )}
      <EmailSignup />
    </Layout>
  );
};

export default SearchPage;

export const query = graphql`
  query SearchTemplateQuery($filters: MdxFilterInput!) {
    s: localSearchPosts {
      store
      index
    }
    posts: allMdx(
      filter: $filters
      sort: { fields: fileAbsolutePath, order: DESC }
      limit: 3
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
