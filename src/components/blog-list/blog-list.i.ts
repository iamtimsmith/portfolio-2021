export interface PostTeaser {
  id?: string;
  excerpt: string;
  frontmatter: {
    title: string;
    published?: boolean;
  };
  fields: {
    slug: string;
  };
}

export interface BlogListProps {
  posts: PostTeaser[];
}
