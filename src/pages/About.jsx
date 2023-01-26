import React, { useEffect } from "react";
import Helmet from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>About us</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
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
