import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Header from "../components/news/Header";
import Posts from "../components/news/Posts";
import Footer from "../layout/Footer";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>News</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Navbar />
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default News;
