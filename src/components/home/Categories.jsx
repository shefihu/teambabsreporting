import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full py-4 px-4 mt-10 mx-auto">
        <h1 className="text-4xl">Categories</h1>
        <div className="md:grid lg:grid-cols-4 gap-4 h-full  w-full mt-10">
          <div className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center ">
            <div className="w-full rounded-2xl h-full bg-gray-200"></div>
            <h1>Admission update</h1>
          </div>
          <div className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center ">
            <div className="w-full rounded-2xl h-full bg-gray-200"></div>
            <h1>News</h1>
          </div>{" "}
          <div className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center ">
            <div className="w-full rounded-2xl h-full bg-gray-200"></div>
            <h1>Campus gist</h1>
          </div>{" "}
          <div className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center ">
            <div className="w-full rounded-2xl h-full bg-gray-200"></div>
            <h1>Education</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
