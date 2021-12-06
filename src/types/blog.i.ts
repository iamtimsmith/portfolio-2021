export interface BlogTemplateProps {
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
    currentPage: number;
    numPages: number;
  };
}
