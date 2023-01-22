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
          {/* <div class=" w-full lg:max-w-full lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="Mountain"
            ></div>
            <>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    <svg
                      class="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    Best Mountain Trails 2020
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src="/ben.png"
                    alt="Avatar of Writer"
                  />
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">John Smith</p>
                    <p class="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </>
          </div> */}
        </>
      )}
    </>
  );
};

export default Posts;
