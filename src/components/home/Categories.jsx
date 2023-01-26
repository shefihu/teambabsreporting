import React from "react";
import admission from "../../assets/images/admission.png";
import news from "../../assets/images/news.png";
import campusGist from "../../assets/images/campusGist.png";
import education from "../../assets/images/education.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/category/${category}`);
  };
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full py-4 px-4 mt-10 mx-auto">
        <h1 className="text-4xl">Categories</h1>
        <div className="md:grid lg:grid-cols-4 gap-4 h-full  w-full mt-10">
          <NavLink
            to={`/category/${"campus"}`}
            className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center "
          >
            <div className="w-full rounded-2xl h-full overflow-hidden  bg-gray-200">
              <img
                src={admission}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1>Admission update</h1>
          </NavLink>
          <NavLink
            to={"/news"}
            className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center "
          >
            <div className="w-full rounded-2xl h-full bg-gray-200 overflow-hidden">
              <img src={news} alt="" className="w-full h-full object-cover" />
            </div>
            <h1>News</h1>
          </NavLink>{" "}
          <NavLink
            to={`/category/${"campus"}`}
            className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center "
          >
            <div className="w-full rounded-2xl h-full bg-gray-200 overflow-hidden">
              <img
                src={campusGist}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1>Campus gist</h1>
          </NavLink>{" "}
          <NavLink
            to={`/category/${"education"}`}
            // onClick={handleCategory("education")}
            className=" h-[19rem] lg:min-h-[20rem] flex flex-col space-y-2 items-center "
          >
            <div className="w-full rounded-2xl h-full bg-gray-200 overflow-hidden">
              <img
                src={education}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h1>Education</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
