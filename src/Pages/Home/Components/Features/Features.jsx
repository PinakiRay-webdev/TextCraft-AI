import React from "react";
import { featureItems } from "../../../../../utils/utils";
const Features = () => {
  return (
    <section className="mt-[20rem] w-[85%] mx-auto">
      <h2 className="text-center text-4xl font-semibold w-[30rem] mx-auto">
        Boost your efficiency with cutting edge features
      </h2>

      <article id="feature-card" className="mt-12 flex gap-8 justify-between flex-wrap px-10">
        {featureItems?.map((item, id) => (
          <div
            key={id}
            className={`h-[18rem] bg-gradient-to-br ${item.gradientClass} rounded-2xl px-5 py-7`}
          >
            <p className="text-zinc-200">{item.header}</p>
            <h3 className="text-white text-2xl w-[80%] font-semibold mt-3">
              {item.Data}
            </h3>
            <p className="text-zinc-200 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              explicabo assumenda
            </p>
            <button className="bg-white rounded-3xl px-8 py-2 mt-8">
              {item.button}
            </button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Features;
