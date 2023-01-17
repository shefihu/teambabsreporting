import React from "react";
import Post from "./Post";

const Posts = ({ data }) => {
  return (
    <div className="w-full flex flex-col space-y-4 h-full">
      {data.map((post, index) => {
        return (
          <div key={index}>
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
