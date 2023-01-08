import React, { useEffect } from "react";
import BottomLayer from "../components/singlepost/BottomLayer";
import Recent from "../components/singlepost/Recent";
import TopLayer from "../components/singlepost/TopLayer";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const SinglePost = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <Navbar />
      <TopLayer />
      <BottomLayer />
      <Recent />
      <Footer />
    </div>
  );
};

export default SinglePost;
