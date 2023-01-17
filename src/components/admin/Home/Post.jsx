import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <div className="w-full h-[275px] py-6 border-b border-b-[#808080]">
        <div className="w-full flex h-full items-center">
          <div className="w-[80%] flex flex-col justify-between h-full">
            <h1 className="text-[32px] font-bold truncate">{post.name}</h1>
            <p className="text-[20px]">{post.description}</p>
            <div className="w-full flex mt-4">
              <div className="w-[300px] h-[43px] space-x-3 items-center flex  ">
                <div className="w-[138px]  h-full text-[20px] items-center justify-center rounded-[8px] bg-gray-100 flex ">
                  <p className=" truncate">Education</p>
                </div>
                <p className="text-[18px] truncate">Praise Olarewanjufffff</p>
              </div>
            </div>
          </div>
          <div className="-[15%] ">
            <img src={post.img} alt="" className="w-[150px] h-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
