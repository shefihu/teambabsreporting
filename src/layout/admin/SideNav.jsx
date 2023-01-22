import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const SideNav = ({ isOpen, setIsOpen }) => {
  const activeLink = "bg-[#d0a23a] font-bold w-full  rounded-lg";
  const normalLink = "   ";
  const sidebarVariant = {
    open: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        duration: 0.45,
      },
    },
  };

  const listvariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const itemvariants = {
    open: {
      // x: 0,
      x: [0, 20, 0],
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div className="w-full h-full lg:flex hidden ">
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
      <div className="w-full h-full lg:hidden flex">
        <motion.div
          initial={"closed"}
          animate={"open"}
          variants={sidebarVariant}
          className="w-[60%] bg-white z-50 shadow-xl h-full left-0 top-0 fixed "
        >
          <div className="flex flex-col items-center relative">
            {isOpen === true && (
              <div className="w-10 h-8 bg-gray-200 shadow-lg absolute flex justify-center items-center top-14 -right-6">
                <button onClick={() => setIsOpen(!isOpen)} className="">
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
            )}

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
        </motion.div>
      </div>
    </>
  );
};

export default SideNav;
