import React from "react";
import { format } from "timeago.js";
import { baseUrl } from "../../constants/Base";

const Post = ({ relatedPosts }) => {
  const datejs = (timeStamp) => {
    var date = new Date(timeStamp + "Z");

    // console.log(Date.parse(date));
    return format(Date.parse(date));
  };
  return (
    <div>
      <div className="grid mt-6 lg:grid-cols-3 w-full gap-10">
        {relatedPosts?.slice(0, 3)?.map((post, index) => {
          return (
            <a
              href={`/post/${post.slug}`}
              key={index}
              className="min-h-[28rem] flex flex-col space-y-4 b"
            >
              <a
                href={`/post/${post.slug}`}
                className="w-full h-[23rem] bg-gray-200 rounded-xl"
              >
                <img
                  crossOrigin="anonymous"
                  src={`${baseUrl}${post.image}`}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </a>
              <div className="space-y-2">
                <div className="w-full space-x-10 flex">
                  <p className="text-[#808080]/70 font-bold">
                    {post.posted_by}
                  </p>
                  <p className="text-[#808080]/70 font-bold">
                    {datejs(post?.created_at)}
                  </p>
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
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
