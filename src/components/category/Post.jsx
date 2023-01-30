import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../redux/PostSlice";
import logo from "../../assets/images/logo.png";
import { FadeLoader } from "react-spinners";
import { baseUrl } from "../../constants/Base";
import { format } from "timeago.js";
const Post = ({ data, loadingPostCat }) => {
  const datejs = (timeStamp) => {
    var date = new Date(timeStamp + "Z");

    // console.log(Date.parse(date));
    return format(Date.parse(date));
  };
  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   dispatch(fetchAllPosts(setLoading));
  // }, [dispatch]);
  // const { loadingPosts, allPosts } = useSelector((state) => state.post);
  // console.log(allPosts);
  return (
    <div>
      <div className="lg:grid mt-6 grid-cols-3 h-full w-full gap-10">
        {data.map((post, index) => {
          return (
            <>
              <a
                href={`/post/${post.slug}`}
                className="min-h-[28rem] flex flex-col mt-4 space-y-4 b"
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
