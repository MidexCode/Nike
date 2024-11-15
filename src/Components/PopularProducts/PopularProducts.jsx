import React from "react";
import { products } from "../Constants/constants.index";

export const PopularProducts = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="font-montserrat font-bold text-4xl">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p>
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
      </section>
    </>
  );
};
