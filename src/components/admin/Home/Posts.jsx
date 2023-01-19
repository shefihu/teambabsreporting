import React from "react";
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
        <div className="w-full flex flex-col space-y-4 h-full">
          {data?.map((post, index) => {
            return (
              <div key={index}>
                <Post post={post} loading={loading} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Posts;
