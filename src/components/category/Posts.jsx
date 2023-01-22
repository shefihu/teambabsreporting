import React from "react";
import Post from "./Post";

const Posts = ({ data, loadingPostCat }) => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem]  h-full py-4 px-4  mx-auto">
        <div className="w-full h-full ">
          <Post data={data} loadingPostCat={loadingPostCat} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
