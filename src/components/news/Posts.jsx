import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem]  h-full py-4 px-4  mx-auto">
        <div className="w-full h-full ">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Posts;
