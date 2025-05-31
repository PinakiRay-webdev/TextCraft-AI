import React from "react";
import { reasons } from "../../../../../utils/utils";
const Reason = () => {
  return (
    <section className="my-[7rem] w-[85%] mx-auto bg-purple-100 px-10 py-8 flex">
      <article className="w-[50%]">
        <h3 className="text-4xl font-semibold mt-3">
          Why you shoud use <br /> this AI tool ?
        </h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          aspernatur ut modi cumque beatae, deleniti est cum quasi fugiat ex
          tempore architecto voluptatum vel iusto velit incidunt quo deserunt
          accusantium?
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 w-[40%] py-2 text-white font-semibold mt-12">
          Generate your Quiz
        </button>
      </article>

      <article className="w-[50%] flex flex-col items-end">
        {reasons.map((reason, id) => (
          <div className="w-[80%] bg-white p-2 rounded-lg drop-shadow-xl mb-8">
            <div key={id} className="">
              <h4 className="font-semibold text-xl">
                {reason.text}
              </h4>
              <p className="text-sm mt-1 opacity-70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                aperiam, dolor omnis
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Reason;
