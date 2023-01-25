import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../constants/Base";
import { motion } from "framer-motion";

const Hero = ({ data, loadingLatest }) => {
  const [index, setIndex] = useState(0);
  const first = data?.slice(0, 4);
  const post = first[index];
  const setLimit = (number) => {
    if (number > first?.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = first?.length - 1;
    }
    return number;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(setLimit(index + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);
  const variants = {
    notMove: { opacity: 0 },
    moves: {
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
      opacity: 1,
    },
  };
  return (
    <div>
      <div className="w-full xl:max-w-[85rem] h-full py-4 px-4 pt-40 mx-auto">
        <h1 className="text-4xl">Latest News</h1>
        <div className="lg:grid lg:grid-cols-3 hidden gap-4 w-full mt-10">
          <div className=" row-span-2 min-h-[16rem] overflow-hidden relative rounded-2xl bg-black/10 backdrop-blur-sm ">
            <div className="w-full h-full  absolute">
              <img
                crossOrigin="anonymous"
                src={`${baseUrl}${data[0]?.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div key={index} className="absolute w-[90%]  h-32 bottom-5 left-4">
              <h1 className="text-xl uppercase text-white font-extrabold">
                {data[0]?.title.substring(0, 80)}
                {data[0]?.title.length >= 80 && "..."}
              </h1>
              <div className="flex mt-2 space-x-4">
                <p className="text-white font-bold">{data[0]?.posted_by}</p>
                <p className="text-white font-bold">4mins ago</p>
              </div>
            </div>
          </div>
          <div className=" col-span-2 min-h-[16rem] overflow-hidden relative rounded-2xl bg-black/10 backdrop-blur-sm ">
            <div className="w-full h-full  absolute">
              <img
                crossOrigin="anonymous"
                src={`${baseUrl}${data[1]?.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              key={index}
              className="absolute w-[90%]   h-32 bottom-5 left-4"
            >
              <h1 className="text-xl uppercase text-white font-extrabold">
                {data[1]?.title.substring(0, 80)}
                {data[1]?.title.length >= 80 && "..."}
              </h1>
              <div className="flex mt-2 space-x-4">
                <p className="text-white font-bold">{data[1]?.posted_by}</p>
                <p className="text-white font-bold">4mins ago</p>
              </div>
            </div>
          </div>
          <div className=" min-h-[16rem] overflow-hidden relative rounded-2xl bg-black/10 backdrop-blur-sm ">
            <div className="w-full h-full  absolute">
              <img
                crossOrigin="anonymous"
                src={`${baseUrl}${data[2]?.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              key={index}
              className="absolute w-[90%]   h-32 bottom-5 left-4"
            >
              <h1 className="text-xl uppercase text-white font-extrabold">
                {data[2]?.title.substring(0, 80)}
                {data[2]?.title.length >= 80 && "..."}
              </h1>
              <div className="flex mt-2 space-x-4">
                <p className="text-white font-bold">{data[2]?.posted_by}</p>
                <p className="text-white font-bold">4mins ago</p>
              </div>
            </div>
          </div>
          <div className=" min-h-[16rem] rounded-2xl overflow-hidden relative bg-black/10 backdrop-blur-sm ">
            <div className="w-full h-full  absolute">
              <img
                crossOrigin="anonymous"
                src={`${baseUrl}${data[3]?.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div
              key={index}
              className="absolute w-[90%]   h-32 bottom-5 left-4"
            >
              <h1 className="text-xl uppercase text-white font-extrabold">
                {data[3]?.title.substring(0, 80)}
                {data[3]?.title.length >= 80 && "..."}
              </h1>
              <div className="flex mt-2 space-x-4">
                <p className="text-white font-bold">{data[3]?.posted_by}</p>
                <p className="text-white font-bold">4mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col space-y-4 h-full py-4   ">
          <div className="h-[15rem]  overflow-hidden relative w-full rounded-2xl">
            <a
              href={`/post/${post.slug}`}
              key={index}
              className="absolute w-full h-full"
            >
              <motion.img
                variants={variants}
                initial={"notMove"}
                crossOrigin="anonymous"
                animate={"moves"}
                src={`${baseUrl}${post?.image}`}
                alt=""
                className="w-full h-full object-cover"
              />
            </a>
            <div
              key={index}
              className="absolute w-[90%] bg-black/10 backdrop-blur-sm  h-20 bottom-5 left-4"
            >
              <motion.h1
                className="text-sm uppercase text-white font-extrabold"
                variants={variants}
                initial={"notMove"}
                animate={"moves"}
              >
                {post?.title.substring(0, 80)}
                {post?.title.length >= 80 && "..."}
              </motion.h1>
              <div className="flex mt-2 space-x-4">
                <p className="text-white font-bold">{post?.posted_by}</p>
                <p className="text-white font-bold">4mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-4 justify-end">
          <NavLink to="/news" className="flex items-center">
            <span>More stories</span> <RxCaretRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
