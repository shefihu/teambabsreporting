import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full h-full relative lg:flex  justify-between hidden">
        <div className="w-[20%] h-screen ">
          <SideNav />
        </div>
        <div className="w-[78%] h-full ">
          <Outlet />
        </div>
      </div>
      <div className="w-full h-full relative lg:hidden  justify-between flex">
        <div className="absolute top-14 left-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight className="w-8 h-8" />
          </button>
        </div>
        {isOpen && (
          <div className="w-[60%] h-screen ">
            <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}

        <div className="w-[100%] h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
