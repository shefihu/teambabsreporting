import React, { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";
import { format } from "timeago.js";
import { baseUrl } from "../../../constants/Base";
import AddPost from "../modals/AddPost";
import DeletePost from "../modals/DeletPost";
import EditPost from "../modals/EditPost";
import Post from "./Post";

const Posts = ({ data, loading }) => {
  const datejs = (timeStamp) => {
    var date = new Date(timeStamp + "Z");

    // console.log(Date.parse(date));
    return format(Date.parse(date));
  };
  // const pText = `https://evergreenffx.com/?invite-code=${ref_id}`;
  // const pText = `http://127.0.0.1:5173/?invite_code=${ref_id}`;
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
    <>
      {loading ? (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
              <div className="flex flex-col flex-1 gap-3">
                <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              </div>
              <div className="flex gap-3 mt-auto">
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
              <div className="flex flex-col flex-1 gap-3">
                <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              </div>
              <div className="flex gap-3 mt-auto">
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
              <div className="flex flex-col flex-1 gap-3">
                <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              </div>
              <div className="flex gap-3 mt-auto">
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
            <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
              <div className="flex flex-col flex-1 gap-3">
                <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
                <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
              </div>
              <div className="flex gap-3 mt-auto">
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full lg:flex hidden flex-col space-y-4 h-full">
            {data?.map((post, index) => {
              return (
                <div key={index}>
                  <Post post={post} loading={loading} />
                </div>
              );
            })}
          </div>
          <div className="w-full h-full mt-16">
            <div className="relative w-full">
              <AddPost />
            </div>
            `
            <div className="lg:hidden grid  grid-cols-1  px-3 h-full w-full gap-4">
              {data?.map((post, index) => {
                return (
                  <div
                    key={index}
                    // href={`/post/${post.slug}`}
                    className="min-h-[28rem] flex flex-col mt-3 space-y-3 b"
                  >
                    <div className="w-full h-[23rem] bg-gray-200 overflow-hidden rounded-xl">
                      <img
                        crossOrigin="anonymous"
                        src={`${baseUrl}${post.image}`}
                        alt=""
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full space-x-10 flex justify-between">
                        <p className="text-[#808080]/70 font-bold">
                          {post.posted_by}
                        </p>
                        <p className="text-[#808080]/70 text-[13px] font-bold">
                          {datejs(post?.created_at)}
                        </p>
                        <div className="w-[124px] h-full space-x-3 flex items-center ">
                          {/* <EditPost
                            body={post.body}
                            image={post.image}
                            title={post.title}
                            slug={post.slug}
                          /> */}
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
                          <DeletePost id={post.slug} />
                        </div>
                      </div>
                      <h1 className="text-xl font-bold">{post.title}</h1>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post?.body
                            ?.substring(0, 180)
                            .replace(/\n/g, "<br/>"),
                        }}
                        className="text-base"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Posts;
