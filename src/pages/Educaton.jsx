import React, { useEffect } from "react";
import Header from "../components/education/Header";
import Posts from "../components/education/Posts";
import Navbar from "../layout/Navbar";

const Educaton = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <Navbar />
      <Header />
      <Posts />
    </div>
  );
};

export default Educaton;
