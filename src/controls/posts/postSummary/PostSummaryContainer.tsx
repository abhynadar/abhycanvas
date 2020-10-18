import React, { useState, useEffect } from "react";
import { parsePostContent } from "../../../utils/postHelper";
import { PostSummary } from "./PostSummary"

import { MetaDataType } from "../../../types/post.types";

type PropsType = {
    year: string;
    post: string;
    path: string;
}

type StateType = {
    data?: MetaDataType;
};

const initialState: StateType = {};

const PostSummaryContainer = ({ year, post, path }: PropsType) => {
    // const initialValue: PostType;
    const [metadata, setMetadata] = useState(initialState);

    useEffect(() => {
        if (path && !metadata.data) {
            fetch(path)
                .then((response) => response.text())
                .then((postContent) => {
                    // console.log("postContent", postContent);
                    const parsedContent = parsePostContent(postContent);
                    if (parsedContent) {
                        setMetadata({ data: parsedContent.metadata });
                    }
                });
        }
    }, [path, metadata]);

    if (!metadata.data) {
        return null;
    }

    console.log('PostSummaryContainer', metadata);
    return (<PostSummary year={year} post={post} metadata={metadata.data} />);
};

export { PostSummaryContainer };
