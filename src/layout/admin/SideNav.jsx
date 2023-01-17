import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const SideNav = () => {
  const activeLink = "bg-[#d0a23a] font-bold w-full  rounded-lg";
  const normalLink = "   ";
  return (
    <div className="w-full h-full  ">
      <div className="w-[20%] h-full left-0 top-0 fixed ">
        <div className="flex flex-col items-center">
          <div className="mt-10">
            <img src={logo} alt="" />
          </div>
          <div className="w-full flex items-center flex-col mt-20 h-60 ">
            <ul className="flex flex-col text-[22px] space-y-4 ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/dashboard/home"}
              >
                <li className="flex space-x-3 px-3 py-2  items-center">
                  <RxDashboard />
                  <span> Dashboard</span>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/dashboard/team"}
              >
                <li className="flex space-x-3 px-3 py-2  items-center">
                  <AiOutlineTeam />
                  <span> Team</span>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/dashboard/categories"}
              >
                <li className="flex space-x-3 px-3 py-2  items-center">
                  <CiViewList />
                  <span> Categories</span>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/dashboard/quiz"}
              >
                <li className="flex space-x-3 px-3 py-2  items-center">
                  <CiViewList />
                  <span> Quiz</span>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/dashboard/settings"}
              >
                <li className="flex space-x-3 px-3 py-2  items-center">
                  <IoSettingsOutline />
                  <span>Settings</span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
