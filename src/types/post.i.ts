import { ImageDataLike } from 'gatsby-plugin-image';

export interface PostTemplateProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
        published: boolean;
        image: string;
      };
      body: string;
    };
    image: ImageDataLike;
  };
}
