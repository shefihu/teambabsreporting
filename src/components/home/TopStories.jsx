import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const TopStories = () => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full  py-4 px-4 mt-4 mx-auto">
        <h1 className="text-4xl">Top Stories</h1>
        <div className="w-full h-full grid gap-4 mt-10 lg:grid-cols-4">
          <div className="min-h-[16rem] lg:row-span-2 bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] row-span-2 bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200 row-span-2"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem]  bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
          <div className="min-h-[16rem] bg-gray-200"></div>
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
