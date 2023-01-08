import React, { useEffect } from "react";
import Categories from "../components/home/Categories";
import Footer from "../layout/Footer";
import Hero from "../components/home/Hero";
import Recet from "../components/home/Recet";
import TopStories from "../components/home/TopStories";
import Navbar from "../layout/Navbar";

const Home = () => {
      useEffect(() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      });
  return (
    <div>
      <Navbar />
      <Hero />
      <TopStories />
      <Categories />
      <Recet />
      <Footer />
    </div>
  );
};

export default Home;
