import React from "react";
import {Link, graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({data}) => (
  <Layout>
    <Seo title='Home' />
    <ul>
      {data.allMdx.nodes.map(node => (
        <li>
          <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h2>
          <p>{node.excerpt}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allMdx(filter: {slug: {regex: "/blog/i"}}, limit: 5) {
      nodes {
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
