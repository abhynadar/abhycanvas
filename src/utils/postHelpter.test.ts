import { parsePostContent } from "./postHelper";

const samplePostContent = `
{
"createdOn": "10-10-2020",
"title": "sample post",
"postId": "100",
"tags": ["tag1", "tag2"]
}
/**content**/
This is markdown content for the post
`;

const samplePostContentWithoutContent = `
{
"createdOn": "10-10-2020",
"title": "sample post",
"postId": "100",
"tags": ["tag1", "tag2"]
}
/**content**/
`;

const samplePostContentWithoutMetadata = `
/**content**/
This is markdown content for the post
`;

const samplePostContentWithoutContentTag = `
{
"createdOn": "10-10-2020",
"title": "sample post",
"postId": "100",
"tags": ["tag1", "tag2"]
}
This is markdown content for the post
`;

describe("parsePostContent", () => {
  it("should return undefined if postContent is empty", () => {
    const parsedOutput = parsePostContent("");
    expect(parsedOutput).toBeUndefined();
  });
  it("should return a valid PostContent type for a valid post", () => {
    const output = parsePostContent(samplePostContent);
    expect(output).toBeDefined();
    expect(output?.metadata).toBeDefined();
    // expect(output?.metadata.createdOn).toEqual(samplePost.metadata.createdOn);
  });
  it("should return undefined if post is missing content but has metaData", () => {
    const output = parsePostContent(samplePostContentWithoutContent);
    expect(output).toBeUndefined();
  });
  it("should return undefined if post is missing metadata", () => {
    const output = parsePostContent(samplePostContentWithoutMetadata);
    expect(output).toBeUndefined();
  });
  it("should return undefined if post is missing contentTag", () => {
    const output = parsePostContent(samplePostContentWithoutContentTag);
    expect(output).toBeUndefined();
  });
});
