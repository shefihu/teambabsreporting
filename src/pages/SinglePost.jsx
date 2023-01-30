import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import BottomLayer from "../components/singlepost/BottomLayer";
import Recent from "../components/singlepost/Recent";
import TopLayer from "../components/singlepost/TopLayer";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
// import f from "";

import {
  fetchAttachment,
  fetchPostByCategory,
  fetchRelated,
  fetchSinglePost,
} from "../redux/PostSlice";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loadinSingle, singlePost, postByCat, relatedpost, attachments } =
    useSelector((state) => state.post);
  const category = singlePost?.category;
  useEffect(() => {
    dispatch(fetchSinglePost(id));
    dispatch(fetchPostByCategory(category));
    dispatch(fetchRelated(id));
    dispatch(fetchAttachment(id));
  }, [dispatch, id, category]);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  // console.log(postByCat);
  return (
    <div>
      <Helmet>
        <title>{singlePost?.title}</title>
        <meta
          name="description"
          content={singlePost?.body?.substring(0, 180)}
        />
      </Helmet>

      <Navbar />
      {loadinSingle ? (
        <div className="w-full h-screen flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <>
          {" "}
          <TopLayer singlePost={singlePost} />
          <BottomLayer singlePost={singlePost} attachments={attachments} />
          <Recent postByCat={postByCat} relatedPosts={relatedpost} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default SinglePost;
