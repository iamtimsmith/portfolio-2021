import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

interface PageTemplateProps {
  children: any;
  pageContext: any;
}

const PageTemplate = ({ children, pageContext }: PageTemplateProps) => {
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
