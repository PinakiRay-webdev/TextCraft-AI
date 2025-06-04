import React from "react";
import featureAsset from "../../../../assets/feature.png";

const Quiz = () => {
  return (
    <section className="my-[7rem] w-[85%] h-[40rem] mx-auto px-10 py-8 flex justify-between">
      <article className="w-[50%]">
        <span className="text-xs font-bold opacity-70">POWER OF AI</span>
        <h3 className="text-4xl font-semibold mt-3 w-[75%]">
          AI-Powered Designed Generation
        </h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          aspernatur ut modi cumque beatae, deleniti est cum quasi fugiat ex
          tempore architecto voluptatum vel iusto velit incidunt quo deserunt
          accusantium?
        </p>
        <div className="grid grid-cols-2 mt-3">
          <p>feature 1</p>
          <p>feature 2</p>
          <p>feature 3</p>
          <p>feature 4</p>
          <p>feature 5</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 w-[40%] py-2 text-white font-semibold mt-12">
          Generate your Quiz
        </button>
      </article>
      <article className="w-[30%] h-full">
        <img className="w-full h-full object-cover" src={featureAsset} alt="" />
      </article>
    </section>
  );
};

export default Quiz;
