import React from "react";
import { NavLink } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
const Hero = () => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full py-4 px-4 pt-40 mx-auto">
        <h1 className="text-4xl">Latest News</h1>
        <div className="lg:grid lg:grid-cols-3 hidden gap-4 w-full mt-10">
          <div className=" row-span-2 min-h-[16rem] rounded-2xl bg-gray-200"></div>
          <div className=" col-span-2 min-h-[16rem] rounded-2xl bg-gray-200"></div>
          <div className=" min-h-[16rem] rounded-2xl bg-gray-200"></div>
          <div className=" min-h-[16rem] rounded-2xl bg-gray-200"></div>
        </div>
        <div className="lg:hidden flex flex-col space-y-4 h-full py-4   ">
          <div className="h-[15rem] bg-gray-200 w-full rounded-2xl"></div>
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

export default Hero;
