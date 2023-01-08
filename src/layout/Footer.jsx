import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full bg-[#808080]/20">
      <div className="w-full xl:max-w-[85rem]  h-32 py-6 px-4  mx-auto">
        <div className="w-full h-full lg:flex hidden justify-between items-center">
          <h1>© Copyright {year}. All Rights Reserved.</h1>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex space-x-6">
            <li className="list-none">
              <NavLink>Contact us</NavLink>
            </li>
            <li className="list-none">
              <NavLink>About us</NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
