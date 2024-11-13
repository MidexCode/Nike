import React from "react";
import { arrowRight } from "../../assets/icons";
import { statistics } from "../Constants/constants.index";

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="font-montserrat text-lg text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span>The New Arrival</span>
            <br />
            <span>Nike</span>
            Shoes
          </h1>
          <p>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

          <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red rounded-full text-white border-coral-red">
            <p>Show Now</p>
            <img
              src={arrowRight}
              alt="arrow-right"
              // width={24}
              // height={24}
              className="ml-2 rounded-full w-7 h-7"
            />
          </button>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p>{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
