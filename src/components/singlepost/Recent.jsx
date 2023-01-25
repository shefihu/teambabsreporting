import React from "react";
import Post from "./Post";

const Recent = ({ relatedPosts }) => {
  return (
    <div className="">
      <div className="w-full xl:max-w-[85rem] h-full py-4 mb-8 px-4  mx-auto">
        <div className="w-full ">
          <h1 className="text-2xl font-bold">Related Posts</h1>
          <Post relatedPosts={relatedPosts} />
        </div>
      </div>
    </div>
  );
};

export default Recent;
