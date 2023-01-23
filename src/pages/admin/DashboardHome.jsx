import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/admin/Home/Posts";
import AddPost from "../../components/admin/modals/AddPost";
import { fetchAllPosts } from "../../redux/PostSlice";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    dispatch(fetchAllPosts(setLoading));
  }, [dispatch]);
  const { loadingPosts, allPosts } = useSelector((state) => state.post);
  const data = [
    {
      id: 1,
      name: "Avatar: Way of the water and light",
      imdb: "9.0 / 10",
      tomatoes: "87%",
      description:
        " Avatar is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "A  John Wick 3 : Parabellum",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Spiderman: No way home",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " Spider wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Flash: Way of the water",
      imdb: "90.0 / 100",
      tomatoes: "97%",
      description:
        " John  is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      img: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="w-full  h-full mt-20">
      <div className="w-full h-full lg:flex hidden justify-between items-center">
        <div className="w-[80%] h-full ">
          <Posts data={allPosts} loading={loading} />
        </div>
        <div className="w-[15%] relative flex items-center justify-center h-full ">
          <AddPost />
        </div>
      </div>
      <div className="w-full h-full lg:hidden flex justify-between items-center">
        <div className="w-[100%] h-full ">
          <Posts data={allPosts} loading={loading} />
        </div>
        {/* <div className="w-[15%] relative flex items-center justify-center h-full ">
          <AddPost />
        </div> */}
      </div>
    </div>
  );
};

export default DashboardHome;
