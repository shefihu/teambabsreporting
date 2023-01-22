import React from "react";
import roffy from "../../assets/images/roffy.JPG";
import praise from "../../assets/images/praise.JPG";
import admiral from "../../assets/images/admiral.JPG";
import sammy from "../../assets/images/sammy.JPG";
import babs from "../../assets/images/babs.JPG";
const Team = () => {
  return (
    <div className="w-full py-10 md:bg-[#808080]/10">
      <div className="w-full xl:max-w-[85rem] flex  h-full px-4 py-5 mx-auto ">
        <div className="w-full">
          <div className="w-[16rem]">
            <h1 className="text-4xl font-bold">Meet our amazing team</h1>
          </div>
          <div className="lg:grid mt-14 grid-cols-3 w-full gap-10 ">
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] bg-gray-200 overflow-hidden rounded-xl">
                <img src={babs} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Babatunde Salaudeen</h1>
                <p>Founder & Chief Editor</p>
              </div>
            </div>
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={roffy}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Salaudeen Rofiat</h1>
                <p>Editor & Publisher</p>
              </div>
            </div>
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] overflow-hidden bg-gray-200 rounded-xl">
                <img
                  src={praise}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Olarewanju Praise</h1>
                <p>Editor & Publisher</p>
              </div>
            </div>
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={sammy}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Adepoju Samuel</h1>
                <p>Editor & Publisher</p>
              </div>
            </div>
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] bg-gray-200 rounded-xl"></div>
              <div>
                <h1 className="text-xl font-bold">Ajilogba Abdulhamid</h1>
                <p>Editor & Publisher</p>
              </div>
            </div>
            <div className="min-h-[25rem] flex flex-col space-y-4 b">
              <div className="w-full h-[20rem] bg-gray-200 overflow-hidden rounded-xl">
                <img
                  src={admiral}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Afolabi Victor</h1>
                <p>Editor & Publisher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
