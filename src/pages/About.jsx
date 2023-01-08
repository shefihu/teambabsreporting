import React, { useEffect } from "react";
import Contact from "../components/about/Contact";
import Hero from "../components/about/Hero";
import MoreAbout from "../components/about/MoreAbout";
import Team from "../components/about/Team";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const About = () => {
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
      <MoreAbout />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
