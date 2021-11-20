import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

const PageTemplate = ({ children, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.description}
      />
      {children}
    </Layout>
  );
};

export default PageTemplate;
