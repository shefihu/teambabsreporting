import React from "react";
import Navbar from "../layout/Navbar";
import quiz from "../assets/images/quiz.png";
import { Link } from "react-router-dom";
const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-full relative bg-gray-100">
        <div className="w-full absolute">
          <img src={quiz} alt="" />
        </div>
        <div className="w-full absolute h-[45rem]  space-y-7 flex flex-col justify-center items-center  pt-32 ">
          <h1 className="text-5xl font-bold">
            Welcome to team Babs quiz section
          </h1>
          <h4 className="text-3xl">Choose the course you want to partake in</h4>
          <select
            name=""
            id=""
            className="w-[15rem] py-3 px-3 bg-transparent border border-black rounded-xl"
          >
            <option value="gse101">GSE 101</option>
            <option value="gse201">GSE 201</option>
            <option value="gse301">GSE 301</option>
            <option value="gns111">GNS 111</option>
            <option value="gns112">GNS 112</option>
            <option value="gns211">GNS 211</option>
            <option value="gns212">GNS 212</option>
          </select>
          <Link
            to={"/quizquestions"}
            className="w-[30rem] flex justify-center text-white bg-black py-3 rounded-lg font-bold"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
