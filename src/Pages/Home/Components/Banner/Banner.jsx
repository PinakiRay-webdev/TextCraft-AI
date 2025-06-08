import React from "react";
import { LuNotebookPen } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative w-full h-[32rem] bg-gradient-to-br from-[#5a189a] via-[#7b2cbf] to-[#3c096c] rounded-3xl overflow-hidden shadow-2xl mt-6">

      <div className="absolute top-10 left-10 text-yellow-300 text-4xl">
        <LuNotebookPen />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-pink-400 text-4xl">
        <FaPenNib />
      </div>
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-4xl">
        <FaFilePdf />
      </div>

      <section className="w-[85%] md:w-[70%] mx-auto text-center text-white h-full flex flex-col justify-center items-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Turn text into <span className="text-yellow-300">Beautiful</span>
          <br /> Designs in Minutes with <span className="text-pink-300">AI</span>.
        </h1>
        <p className="text-lg md:text-xl mt-6 text-purple-100 font-medium max-w-2xl">
          Generate smart notes, quick summaries, and interactive quizzes with just a paragraph.
        </p>
        <div className="mt-8 flex gap-6">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 font-semibold rounded-full shadow-lg transition">
            Try Now
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-purple-800 px-6 py-3 font-semibold rounded-full transition">
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
