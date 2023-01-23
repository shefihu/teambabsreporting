import React from "react";
import AddPost from "../modals/AddPost";
import DeletePost from "../modals/DeletPost";
import EditPost from "../modals/EditPost";
import Post from "./Post";

const Posts = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex flex-col space-y-4">
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
          </div>{" "}
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
            <div className="lg:grid  grid-cols-3  px-3 h-full w-full gap-10">
              {data.map((post, index) => {
                return (
                  <>
                    <a
                      href={`/post/${post.slug}`}
                      className="min-h-[28rem] flex flex-col mt-5 space-y-4 b"
                    >
                      <div className="w-full h-[23rem] bg-gray-200 overflow-hidden rounded-xl">
                        <img
                          crossOrigin="anonymous"
                          src={`https://teambabs.onrender.com/${post.image}`}
                          alt=""
                          className="w-full h-full object-cover "
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="w-full space-x-10 flex justify-between">
                          <p className="text-[#808080]/70 font-bold">
                            {post.posted_by}
                          </p>
                          <p className="text-[#808080]/70 font-bold">
                            December 10
                          </p>
                          <div className="w-[124px] h-full space-x-3 flex items-center ">
                            <EditPost
                              body={post.body}
                              image={post.image}
                              title={post.title}
                              slug={post.slug}
                            />
                            <DeletePost id={post.slug} />
                          </div>
                        </div>
                        <h1 className="text-xl font-bold">{post.title}</h1>
                        <p>
                          {post.body.substring(0, 180)}
                          {post.body.length >= 120 && "..."}
                        </p>
                      </div>
                    </a>
                  </>
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
