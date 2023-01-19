import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
