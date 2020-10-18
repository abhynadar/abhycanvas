import React from "react";
import ReactMarkdown from "react-markdown";

import { MetaDataType } from "../../../types/post.types";

type PropsType = {
    year: string;
    post: string;
    metadata: MetaDataType;
}

const PostSummary = ({ year, post, metadata }: PropsType) => {
    console.log('PostSummary', post);
    return (
        <>
            <div className="post-preview">
                <a href={`/posts/${year}/${post}`}>
                    <h2 className="post-title">{metadata.title}</h2>
                    <h3 className="post-subtitle">
                        <ReactMarkdown source={metadata.description} />
                    </h3>
                </a>
                <p className="post-meta">
                    dated - {metadata.createdOn.toLocaleDateString()}
                </p>
            </div>
            <hr />
        </>
    );
};

export { PostSummary };
