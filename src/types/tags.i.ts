export interface TagsTemplateProps {
  data: {
    tags: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}
