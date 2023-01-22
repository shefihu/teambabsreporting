import React, { useEffect } from "react";
import Categories from "../components/home/Categories";
import Footer from "../layout/Footer";
import Hero from "../components/home/Hero";
import Recet from "../components/home/Recet";
import TopStories from "../components/home/TopStories";
import Navbar from "../layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPosts } from "../redux/PostSlice";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestPosts());
  }, [dispatch]);

  const { loadingLatest, latestpost } = useSelector((state) => state.post);
  console.log(latestpost);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <Navbar />
      {loadingLatest ? (
        <div className="w-full h-screen flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <>
          <Hero loadingLatest={loadingLatest} data={latestpost} />
          <TopStories data={latestpost} />
          <Categories />
          <Recet data={latestpost} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
