export interface BlogListProps {
  posts: {
    id: string;
    excerpt: string;
    frontmatter: {
      title: string;
      published?: boolean;
    };
    fields: {
      slug: string;
    };
  }[];
}
