import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import quiz from "../assets/images/quiz.png";
import under from "../assets/images/under.jpg";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const Quiz = () => {
  const [course, setCourse] = useState("GNS212");
  useEffect(() => {
    Cookies.remove("answers");
  }, []);
  return (
    <div>
      <Navbar />
      {/* <div className="w-full max-w-[89rem] justify-center flex-col items-center h-screen  flex">
        <div className="lg:w-[50%] w-full mt-40">
          <img src={under} alt="" />
        </div>
        <h1> Coming soon...</h1>
      </div> */}
      <div className="w-[100%] h-full relative bg-gray-100">
        <div className="w-full lg:absolute lg:flex hidden">
          <img src={quiz} alt="" />
        </div>
        <div className="w-full absolute h-[45rem]  space-y-7 lg:flex hidden flex-col justify-center items-center  pt-32 ">
          <h1 className="lg:text-5xl text-center text-3xl font-bold">
            Welcome to team Babs quiz section
          </h1>
          <h4 className="text-3xl">Choose the course you want to partake in</h4>
          <select
            onChange={(e) => setCourse(e.target.value)}
            name="course"
            value={course}
            id=""
            className="w-[15rem] py-3 px-3 bg-transparent border border-black rounded-xl"
          >
            <option value="GNS111">GNS111</option>
            <option value="GNS112">GNS112</option>
            <option value="GNS211">GNS211</option>
            <option value="GNS212">GNS212</option>
            <option value="GNS311">GNS311</option>
            <option value="GNS313">GNS312</option>
            <option value="putme">POST UTME</option>
          </select>
          <Link
            to={`/questions/${course}`}
            className="w-[30rem] flex justify-center text-white bg-black py-3 rounded-lg font-bold"
          >
            Start Quiz
          </Link>
        </div>
        <div className="lg:hidden flex w-full h-screen flex-col space-y-4 items-center justify-center">
          <h1 className="lg:text-5xl text-center text-3xl font-bold">
            Welcome to team Babs quiz section
          </h1>
          <h4 className="text-xl text-center">
            Choose the course you want to partake in
          </h4>
          <select
            onChange={(e) => setCourse(e.target.value)}
            name="course"
            value={course}
            id=""
            className="w-[15rem] py-3 px-3 bg-transparent border border-black rounded-xl"
          >
            <option value="GNS111">GNS111</option>
            <option value="GNS112">GNS112</option>
            <option value="GNS211">GNS211</option>
            <option value="GNS212">GNS212</option>
            <option value="GNS311">GNS311</option>
            <option value="GNS313">GNS312</option>
            <option value="putme">POST UTME</option>
          </select>
          <Link
            to={`/questions/${course}`}
            className="w-[10rem] flex justify-center text-white bg-black py-3 rounded-lg font-bold"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
