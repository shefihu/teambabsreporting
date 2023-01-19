import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import BottomLayer from "../components/singlepost/BottomLayer";
import Recent from "../components/singlepost/Recent";
import TopLayer from "../components/singlepost/TopLayer";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { fetchPostByCategory, fetchSinglePost } from "../redux/PostSlice";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loadinSingle, singlePost, postByCat } = useSelector(
    (state) => state.post
  );
  const category = singlePost?.category;
  useEffect(() => {
    dispatch(fetchSinglePost(id));
    dispatch(fetchPostByCategory(category));
  }, [dispatch, id, category]);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  console.log(postByCat);
  return (
    <div>
      <Navbar />
      {loadinSingle ? (
        <div className="w-full h-screen flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <>
          {" "}
          <TopLayer singlePost={singlePost} />
          <BottomLayer singlePost={singlePost} />
          <Recent relatedPosts={postByCat} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default SinglePost;
