import React from "react";
import { useNavigate } from "react-router-dom";
import { reasons } from "../../../../../utils/utils";
const Reason = () => {

  const navigate = useNavigate();
  return (
    <section className="my-20 w-[98%] max-w-6xl mx-auto bg-purple-100 px-3 sm:px-6 md:px-10 py-8 flex flex-col lg:flex-row gap-10">
      <article className="w-full lg:w-1/2">
        <h3 className="text-3xl sm:text-4xl font-semibold mt-3">
          Why you should use <br /> this AI tool?
        </h3>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Instantly summarize long paragraphs, generate organized notes, and create interactive quizzes—all in one AI-powered platform to save you time and make studying smarter.
        </p>
        <button onClick={() => navigate('/quiz')} className="bg-gradient-to-r from-blue-500 to-purple-500 w-full sm:w-[60%] md:w-[40%] py-2 text-white font-semibold mt-10 rounded shadow">
          Generate your Quiz
        </button>
      </article>

      <article className="w-full lg:w-1/2 flex flex-col items-end">
        {reasons.map((reason, id) => (
          <div
            key={id}
            className="w-full sm:w-[90%] md:w-[80%] bg-white p-4 rounded-lg drop-shadow-xl mb-6 last:mb-0"
          >
            <div>
              <h4 className="font-semibold text-lg sm:text-xl">{reason.text}</h4>
              <p className="text-sm sm:text-base mt-1 opacity-70">{reason.desc}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Reason;