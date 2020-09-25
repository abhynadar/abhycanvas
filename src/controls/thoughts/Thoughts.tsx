import React from "react";
import "./Thoughts.css";
import { thoughts, Thought } from "../../data/thoughts";

const Thoughts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {thoughts.map((thought: Thought) => {
            const link = thought.title.replace(" ", "-").toLowerCase();
            return (
              <>
                <div className="post-preview">
                  <a href={`/thoughts/${link}`}>
                    <h2 className="post-title">{thought.title}</h2>
                    <h3
                      className="post-subtitle"
                      dangerouslySetInnerHTML={{
                        __html: thought.content,
                      }}
                    />
                  </a>
                  <p className="post-meta">
                    dated - {thought.date.toLocaleDateString()}
                  </p>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Thoughts };
