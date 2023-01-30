import React from "react";
import { format } from "timeago.js";
import { baseUrl } from "../../constants/Base";

const TopLayer = ({ singlePost }) => {
  const datejs = (timeStamp) => {
    var date = new Date(timeStamp + "Z");

    // console.log(Date.parse(date));
    return format(Date.parse(date));
  };
  return (
    <div>
      <div className="w-full xl:max-w-[85rem]  flex h-full  px-4 py-5 pt-32 mx-auto ">
        <div className="w-full h-full">
          <div className="w-full h-[20rem] bg-gray-200 rounded-xl overflow-hidden">
            <img
              crossOrigin="anonymous"
              src={`${baseUrl}${singlePost?.image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 h-full">
            <h6>{datejs(singlePost?.created_at)}</h6>
            <h1 className="text-4xl font-semibold">{singlePost?.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLayer;
