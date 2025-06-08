import React from "react";
import { useNavigate } from "react-router-dom";
import featureAsset from "../../../../assets/feature.png";
import { notesFeatures } from "../../../../../utils/utils";

const Quiz = () => {

  const navigate = useNavigate()

  return (
    <section className="my-20 w-[95%] max-w-6xl mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0">
      <article className="w-full lg:w-1/2">
        <span className="text-xs font-bold opacity-70">POWER OF AI</span>
        <h3 className="text-3xl sm:text-4xl font-semibold mt-3 w-full">
          AI-powered notes and summary generator
        </h3>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Effortlessly turn lengthy content into concise, organized notes and summaries with the power of AI. Perfect for students, professionals, and lifelong learners who want to save time and boost productivity.
        </p>
<div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm sm:text-base">
  {notesFeatures.map((feature, idx) => (
    <p key={idx}>• {feature}</p>
  ))}
</div>
        <button onClick={() => navigate('/summary')} className="bg-gradient-to-r from-blue-500 to-purple-500 w-full sm:w-2/3 md:w-1/2 py-2 text-white font-semibold mt-10 rounded shadow">
          Generate your Notes
        </button>
      </article>
      <article className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
        <img
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-[22rem] h-auto object-contain rounded-xl shadow"
          src={featureAsset}
          alt="AI Quiz Feature"
        />
      </article>
    </section>
  );
};

export default Quiz;