import React, { useState } from "react";
import { BiCaretDown, BiLogOut, BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
const Topbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);
  // (location.pathname);
  const pagename = path.split("/");
  const arrangedPageName =
    pagename[2].charAt(0).toUpperCase() + pagename[2].slice(1);
  const logOut = () => {
    Cookies.remove("userdetails");
    Cookies.remove("token");
    window.location = "/";
  };
  return (
    <div>
      <div className="w-full h-20 top-0 drop-shadow-lg bg-white fixed">
        <div className="w-full flex justify-between items-center px-3  lg:max-w-[50%]   b h-full lg:mx-auto">
          <h1 className="text-[30px] lg:flex hidden font-bold">
            {arrangedPageName}
          </h1>
          <div
            onClick={() => setEdit(!edit)}
            className="w-40 relative flex items-center space-x-3"
          >
            <h1>{user.name}</h1>
            <button>
              <BiCaretDown />
            </button>
            {edit && (
              <div className="w-40 bg-white top-6 right-0 absolute px-3 h-20 py-2 justify-between  flex flex-col">
                <div className="text-xl flex space-x-3 items-center">
                  <BiUser />
                  <span>Edit Profile</span>
                </div>
                <div
                  onClick={logOut}
                  className="text-xl flex cursor-pointer items-center space-x-3 text-red-400"
                >
                  <BiLogOut />
                  <span>Log out</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
