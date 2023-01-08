import React, { useEffect } from "react";
import Header from "../components/news/Header";
import Posts from "../components/news/Posts";
import Navbar from "../layout/Navbar";

const News = () => {
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

export default News;
