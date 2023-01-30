import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Header from "../components/category/Header";
import Posts from "../components/category/Posts";
import Navbar from "../layout/Navbar";
import { fetchPostByCategory } from "../redux/PostSlice";

const Category = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  const { category } = useParams();
  const dispatch = useDispatch();

  const { loadingPostCat, singlePost, postByCat } = useSelector(
    (state) => state.post
  );
  //   const categor = postByCat?.map((x) => {
  //     return x.category;
  //   });
  useEffect(() => {
    dispatch(fetchPostByCategory(category));
  }, [dispatch, category]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{category}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Navbar />
      {loadingPostCat ? (
        <>
          <div className="w-full flex justify-center h-screen items-center">
            <FadeLoader />
          </div>
        </>
      ) : (
        <>
          <Header data={postByCat} loadingPostCat={loadingPostCat} />
          <Posts data={postByCat} loadingPostCat={loadingPostCat} />
        </>
      )}
    </div>
  );
};

export default Category;
