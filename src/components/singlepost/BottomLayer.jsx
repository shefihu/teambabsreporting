import React from "react";

const BottomLayer = (props) => {
  const { singlePost } = props;
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
          className="text-xl"
        />
      </div>
    </div>
  );
};

export default BottomLayer;
