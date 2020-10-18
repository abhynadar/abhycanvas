import React from "react";

import "./Posts.css";
import * as posts2020 from "../post/internal/year2020";
import { PostSummaryContainer } from "./postSummary/PostSummaryContainer";

type PostPath = {
    [key: string]: string;
};

type YearlyPosts = {
    [key: string]: PostPath;
};

const posts: YearlyPosts = {
    posts2020,
};


const Posts = () => {
    console.log('home', posts);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-10 mx-auto">
                    <ul>
                        {
                            Object.keys(posts).map((postYear) => {
                                console.log('postyear', Object.keys(posts[postYear]));
                                const year = postYear.replace('posts', '');

                                return Object.keys(posts[postYear]).map((post) => {
                                    return (<PostSummaryContainer key={`${year}-${post}`} year={year} post={post} path={posts[postYear][post]} />);
                                })
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { Posts };
