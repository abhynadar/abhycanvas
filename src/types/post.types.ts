export type PostType = {
  metadata: {
    postId: string;
    createdOn: Date;
    title: string;
    tags: string[];
  };
  content: string;
};
