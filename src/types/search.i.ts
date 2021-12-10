import { WindowLocation } from '@reach/router';

export interface SearchPageProps {
  data: {
    s: {
      index: any;
      store: any;
    };
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
  location: WindowLocation;
}
