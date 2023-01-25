import React from "react";
import contact from "../../assets/images/contact.png";
const Contact = () => {
  return (
    <div className="w-full ">
      <div className="md:flex hidden">
        <div className="w-full  relative ">
          <div className="w-full">
            <img src={contact} alt="" className="w-full object-cover" />
          </div>
          <div className="absolute left-20  w-[30rem]  jus-center  h-[30rem] top-[15%]">
            <div className="w-[23rem]  h-[15rem]">
              <h1 className="text-[40px] font-bold text-white">
                Have a question? Our team is happy to help you
              </h1>
            </div>
            <div className="w-full h-16  items-center flex space-x-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/2348032514191"
                className="h-10 px-3 rounded-lg flex justify-center items-center font-bold bg-white"
              >
                Contact us
              </a>
              <h1 className="text-white font-semibold">
                Or call +234 803 251 4191
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:hidden flex h-[435px]">
        <div className="w-full flex flex-col items-center  h-full bg-[#215363] px-10 text-white ">
          <h1 className="text-center font-bold text-[32px] py-10">
            Have a question? Our team is happy to help you
          </h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/2348032514191"
            className="w-[141px] h-[59px] bg-white flex justify-center items-center font-bold rounded-[8px] text-black"
          >
            Contact us
          </a>
          <p className="mt-10 font-bold">Or</p>
          <p className="font-bold">Call +234 803 251 4191</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
