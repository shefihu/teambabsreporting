import React from "react";
import { format } from "timeago.js";
const TopLayer = ({ singlePost }) => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem]  flex h-full  px-4 py-5 pt-32 mx-auto ">
        <div className="w-full h-full">
          <div className="w-full h-[20rem] bg-gray-200 rounded-xl overflow-hidden">
            <img
              crossOrigin="anonymous"
              src={`https://teambabs-server-bolu1.koyeb.app/${singlePost?.image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 h-full">
            <h6>{format(singlePost?.created_at)}</h6>
            <h1 className="text-4xl font-semibold">{singlePost?.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLayer;
