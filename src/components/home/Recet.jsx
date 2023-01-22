import React from "react";
import { Link, NavLink } from "react-router-dom";

const Recet = ({ data }) => {
  return (
    <div className="py-10">
      <div className="w-full xl:max-w-[85rem]  h-full py-6 px-4  mx-auto">
        <h1 className="text-4xl">Recent Posts</h1>
        <div className="w-full space-y-3 h-full mt-10">
          {data.map((post, index) => {
            return (
              <li key={index} className="list-disc text-lg">
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recet;
