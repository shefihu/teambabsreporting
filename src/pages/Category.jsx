import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      <Navbar />
      <Header data={postByCat} />
      <Posts data={postByCat} loadingPostCat={loadingPostCat} />
    </div>
  );
};

export default Category;
