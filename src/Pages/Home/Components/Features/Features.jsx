import React from "react";
import { featureItems } from "../../../../../utils/utils";
import { useNavigate } from "react-router-dom";
const Features = () => {

  const navigate = useNavigate()

  return (
    <section className="mt-[12rem] w-[95%] max-w-7xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
        Boost your efficiency with cutting edge features
      </h2>

      <article
        id="feature-card"
        className="mt-12 flex flex-wrap gap-8 justify-center"
      >
        {featureItems?.map((item, id) => (
          <div
            key={id}
            className={`w-full sm:w-[22rem] flex-1 min-w-[18rem] max-w-xs h-auto bg-gradient-to-br ${item.gradientClass} rounded-2xl px-5 py-7 flex flex-col justify-between`}
          >
            <p className="text-zinc-200">{item.header}</p>
            <h3 className="text-white text-2xl font-semibold mt-3">
              {item.Data}
            </h3>
            <p className="text-zinc-200 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              explicabo assumenda
            </p>
            <button onClick={() => navigate(item.path)} className="bg-white rounded-3xl px-8 py-2 mt-8">
              {item.button}
            </button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Features;