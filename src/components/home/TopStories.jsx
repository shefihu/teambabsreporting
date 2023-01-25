import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { baseUrl } from "../../constants/Base";

const TopStories = ({ data }) => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full  py-4 px-4 mt-4 mx-auto">
        <h1 className="text-4xl">Top Stories</h1>
        <div className="w-full h-full  grid gap-4 mt-10 lg:grid-cols-4">
          {data?.map((post, index) => [
            <a
              href={`/post/${post.slug}`}
              key={index}
              className="min-h-[16rem]  "
            >
              <div className="w-full h-[200px]">
                <img
                  crossOrigin="anonymous"
                  src={`${baseUrl}${post.image}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full space-x-10 mt-2 flex">
                <p className="text-[#808080]/70 font-bold">{post.posted_by}</p>
                <p className="text-[#808080]/70 font-bold">December 10</p>
              </div>
              <h1 className="text-xl font-bold">{post.title}</h1>
            </a>,
          ])}
        </div>
        <div className="w-full flex mt-4 justify-end">
          <NavLink to="/news" className="flex items-center">
            <span>More stories</span> <RxCaretRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
