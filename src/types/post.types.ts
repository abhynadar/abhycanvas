export type PostType = {
  metadata: MetaDataType;
  content: string;
};

export type MetaDataType = {
  postId: string;
  createdOn: Date;
  title: string;
  tags: string[];
  description: string;
}