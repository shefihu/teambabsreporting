import React from "react";
import { baseUrl } from "../../constants/Base";
const BottomLayer = (props) => {
  const { singlePost, attachments } = props;
  console.log(attachments);
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] flex  h-full md:mt-0 mt-3  px-4 py-5  mx-auto">
        {/* <p className="text-xl">
          {" "}
          {singlePost.body.split("\r\n").map((line) => (
            <div>{line}</div>
          ))}
        </p> */}
        <p
          dangerouslySetInnerHTML={{
            __html: singlePost?.body?.replace(/\n/g, "<br/>"),
          }}
          className="lg:text-xl text-lg"
        />
        <div className="grid lg:grid-cols-3 mt-10 gap-10">
          {attachments?.map(() => {
            return (
              <div className=" min-h-[60px]">
                <img
                  crossOrigin="anonymous"
                  src={`${baseUrl}${singlePost?.image}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomLayer;
