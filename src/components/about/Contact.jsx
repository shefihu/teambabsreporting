import React from "react";
import contact from "../../assets/images/contact.png";
const Contact = () => {
  return (
    <div className="w-full ">
      <div className="md:flex hidden">
        <div className="w-full  relative ">
          <div className="w-full">
            <img src={contact} alt="" />
          </div>
          <div className="absolute left-20  w-[30rem]  jus-center  h-[30rem] top-[15%]">
            <div className="w-[23rem]  h-[15rem]">
              <h1 className="text-[40px] font-bold text-white">
                Have a question? Our team is happy to help you
              </h1>
            </div>
            <div className="w-full h-16  items-center flex space-x-4">
              <button className="h-10 px-3 rounded-lg font-bold bg-white">
                Contact us
              </button>
              <h1 className="text-white font-semibold">Or call 08142347661</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
