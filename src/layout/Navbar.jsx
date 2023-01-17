import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const activeLink = "text-[#d0a23a] font-bold ";
  const normalLink = "   ";
  return (
    <div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <header
        className={`w-full h-[6rem]  flex  fixed top-0 z-50 transition-all  ${
          isScrolled &&
          "border-b border-b-gray-500 bg-white/80 backdrop-blur-sm "
        }`}
      >
        <div className="w-full xl:max-w-[85rem] px-6 lg:px-4 mx-auto flex  justify-between items-center">
          <div className="md:w-[15%]">
            <img src={logo} alt="" />
          </div>
          <div className="w-[80%] h-20  ">
            <ul className="md:flex hidden lg:space-x-16 md:space-x-10 text-lg items-center justify-end w-full h-full">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/news"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/education"
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/quiz"
                >
                  Quiz
                </NavLink>
              </li>
              <li>Search</li>
            </ul>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden  flex"
          >
            <RxHamburgerMenu className="w-7 h-7" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
