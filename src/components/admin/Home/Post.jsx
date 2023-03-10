import React, { useState } from "react";
import { BiCheck, BiCopy, BiTrash } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import DeletePost from "../modals/DeletPost";
import { baseUrl } from "../../../constants/Base";

import EditPost from "../modals/EditPost";
const Post = ({ post, loading }) => {
  const [copied, setCopied] = useState(false);
  function copyToClipboard(pText) {
    // this won't work in development but only in production because of its secure https protocol
    navigator.clipboard.writeText(pText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <div>
      <div className="w-full h-[275px] py-6 border-b border-b-[#808080]">
        <div className="w-full  flex h-full items-center">
          <div className="w-[80%] flex flex-col justify-between h-full">
            <h1 className="text-[32px] font-bold truncate">{post.title}</h1>
            {/* <p className="text-[20px] h-20 ">
              {post.body.substring(0, 220)}
              {post.body.length >= 220 && "..."}
            </p> */}
            <p
              dangerouslySetInnerHTML={{
                __html: post?.body?.substring(0, 160).replace(/\n/g, "<br/>"),
              }}
              className="text-[20px] h-20"
            />
            <div className="w-full pr-3 flex mt-4 justify-between">
              <div className="w-[300px] h-[43px] space-x-3 items-center flex  ">
                <div className="w-[138px]  h-full text-[20px] items-center justify-center rounded-[8px] bg-gray-100 flex ">
                  <p className=" ">{post.category}</p>
                </div>
                <p className="text-[18px] truncate">{post.posted_by}</p>
              </div>
              <div className="w-[124px] h-full space-x-3 flex items-center ">
                <button
                  onClick={() =>
                    copyToClipboard(
                      `https://babsreporting.com/post/${post.slug}`
                    )
                  }
                >
                  {!copied ? (
                    <BiCopy className="lg:w-[28px] lg:h-[28px] w-[20px] h-[20px]" />
                  ) : (
                    <BiCheck className="lg:w-[28px] lg:h-[28px] w-[20px] h-[20px]" />
                  )}
                </button>
                {/* <EditPost
                  body={post.body}
                  image={post.image}
                  title={post.title}
                  slug={post.slug}
                /> */}
                <DeletePost id={post.slug} />
              </div>
            </div>
          </div>
          <div className="w-[15%] ">
            <img
              crossOrigin="anonymous"
              src={`${baseUrl}${post.image}`}
              alt=""
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
