import { PostType } from "../types/post.types";

const CONTENT_TAG = "/**content**/";

const parsePostContent = (postContent: string): PostType | undefined => {
  const parts: string[] = postContent.split(CONTENT_TAG);
  if (parts && parts.length !== 2) return;

  if (!parts[0] || parts[1].replace(/\n/, "") === "") return;

  try {
    // console.log(
    //   parts,
    //   parts[0],
    //   parts[0].replace(/\n/g, " "),
    //   "parts1",
    //   parts[1],
    //   "after",
    //   parts[1].replace(/\n/, "") === "",
    //   "another"
    // );
    const metaData = JSON.parse(parts[0].replace(/\n/g, " "));
    const content = parts[1];
    const parsedContent: PostType = {
      metadata: { ...metaData, createdOn: new Date(metaData.createdOn) },
      content,
    };
    return parsedContent;
  } catch (err) {
    console.log("Error parsing postContent", err);
  }

  return;
};

export { parsePostContent };
