import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import { Header } from "../header/Header";
import { parsePostContent } from "../../utils/postHelper";
import * as posts2020 from "./internal/year2020";

import { PostType } from "../../types/post.types";

type PostPath = {
  [key: string]: string;
};

type YearlyPosts = {
  [key: string]: PostPath;
};

type IProps = {
  match: {
    params: {
      year: string;
      title: string;
    };
  };
};

type State = {
  data?: PostType;
};

const initialState: State = {};

const posts: YearlyPosts = {
  posts2020,
};

const getPostPath = (year: string, title: string): string => {
  if (
    year &&
    title &&
    Object.keys(posts).includes(`posts${year}`) &&
    Object.keys(posts[`posts${year}`]).includes(title)
  ) {
    return posts[`posts${year}`][title];
  }
  return "";
};

const Post = ({
  match: {
    params: { title = "", year = "" },
  },
}: IProps) => {
  console.log("Post", year, title, posts);

  const postPath = getPostPath(year, title);

  // const initialValue: PostType;
  const [content, setContent] = useState(initialState);

  useEffect(() => {
    if (postPath) {
      fetch(postPath)
        .then((response) => response.text())
        .then((postContent) => {
          // console.log("postContent", postContent);
          const parsedContent = parsePostContent(postContent);
          if (parsedContent) {
            setContent({ data: parsedContent });
          }
        });
    }
  }, [postPath]);

  if (!content.data) {
    return (
      <div>
        <Header />
        There is no content here
      </div>
    );
  }

  const metadata = content.data.metadata;
  const tagCount = metadata.tags.length - 1;

  return (
    <div>
      <Header />
      <div className="container">
        <h1>{metadata.title}</h1>
        <h5>{`${metadata.createdOn.toLocaleDateString()} - [`}
          {
            metadata.tags.map((tag, index) => {
              return (<i>{tag}{index === tagCount ? "]" : ","} </i>);
            })
          }
        </h5>
        <a href="/">&lt;-- Back to home</a>
        <br />
        <br />
        <div>
          <ReactMarkdown source={content.data.content} />
        </div>
      </div>
    </div>
  );
};

export { Post };

/*
Reference - https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component
Markdown cheatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
*/
