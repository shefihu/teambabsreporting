import React from "react";
import { BiTrash } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
const Post = ({ post, loading }) => {
  return (
    <div>
      {loading ? (
        <div class="flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
          <div class="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
          <div class="flex flex-col flex-1 gap-5 sm:p-2">
            <div class="flex flex-col flex-1 gap-3">
              <div class="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
              <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            </div>
            <div class="flex gap-3 mt-auto">
              <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div class="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[275px] py-6 border-b border-b-[#808080]">
          <div className="w-full flex h-full items-center">
            <div className="w-[80%] flex flex-col justify-between h-full">
              <h1 className="text-[32px] font-bold truncate">{post.title}</h1>
              <p className="text-[20px] h-20 ">
                {post.body.substring(0, 220)}
                {post.body.length >= 220 && "..."}
              </p>
              <div className="w-full pr-3 flex mt-4 justify-between">
                <div className="w-[300px] h-[43px] space-x-3 items-center flex  ">
                  <div className="w-[138px]  h-full text-[20px] items-center justify-center rounded-[8px] bg-gray-100 flex ">
                    <p className=" ">{post.category}</p>
                  </div>
                  <p className="text-[18px] truncate">{post.posted_by}</p>
                </div>
                <div className="w-[124px] h-full space-x-3 flex items-center ">
                  <button>
                    <SlNote className="w-[28px] h-[28px]" />
                  </button>
                  <button>
                    <BiTrash className="w-[28px] h-[28px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[15%] ">
              <img
                crossorigin="anonymous"
                src={`https://teambabs.onrender.com/${post.image}`}
                alt=""
                className="w-[150px] h-[150px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
