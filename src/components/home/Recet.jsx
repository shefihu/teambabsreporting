import React from "react";
import { NavLink } from "react-router-dom";

const Recet = () => {
  return (
    <div className="py-10">
      <div className="w-full xl:max-w-[85rem]  h-full py-6 px-4  mx-auto">
        <h1 className="text-4xl">Recent Posts</h1>
        <div className="w-full space-y-3 h-full mt-10">
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
          <li className="list-disc text-lg">
            <NavLink>
              Hellow world this is a latest blog post made by team babs
              reporting
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Recet;
