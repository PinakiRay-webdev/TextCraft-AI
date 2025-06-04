import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Detail from "./Component/Detail/Detail";

const Banner = () => {
  return (
    <div className="h-[100vh] w-full rounded-4xl bg-radial from-[#5a189a] from-10% to-[#240046] mt-5">
      <section
        id="intro"
        className="w-[70%] mx-auto text-center text-white text-7xl font-bold leading-[5rem] h-fit py-18 relative"
      >
        <h1>
          Turn text into <span className="text-yellow-300">Beautiful</span>{" "}
          <br /> Design in Minutes with AI.
        </h1>
        <p className="text-4xl absolute top-12 left-12">
          <LuNotebookPen />
        </p>
        <p className="text-4xl absolute bottom-0 left-[50%]">
          <FaPenNib />
        </p>
        <p className="text-4xl absolute top-[40%] right-0">
          <FaFilePdf />
        </p>
      </section>

      <Detail/>
    </div>
  );
};

export default Banner;
