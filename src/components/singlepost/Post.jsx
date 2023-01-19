import React from "react";

const Post = ({ relatedPosts }) => {
  return (
    <div>
      <div className="grid mt-6 lg:grid-cols-3 w-full gap-10">
        {relatedPosts?.slice(0, 3)?.map((post, index) => {
          return (
            <div
              key={index}
              className="min-h-[28rem] flex flex-col space-y-4 b"
            >
              <div className="w-full h-[23rem] bg-gray-200 rounded-xl"></div>
              <div className="space-y-2">
                <div className="w-full space-x-10 flex">
                  <p className="text-[#808080]/70 font-bold">
                    {post.posted_by}
                  </p>
                  <p className="text-[#808080]/70 font-bold">December 10</p>
                </div>
                <h1 className="text-xl font-bold">{post.title}</h1>
                <p>
                  {post.body.substring(0, 180)}
                  {post.body.length >= 120 && "..."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
