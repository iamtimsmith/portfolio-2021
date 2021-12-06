export interface TagTemplateProps {
  data: {
    posts: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          published: boolean;
        };
        fields: {
          slug: string;
        };
        excerpt: string;
      }[];
    };
  };
  pageContext: {
    slug: string;
  };
}
