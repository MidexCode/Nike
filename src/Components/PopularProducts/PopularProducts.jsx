import React from "react";
import { products } from "../Constants/constants.index";
import PopularProductsCard from "../PopularProductsCard/PopularProductsCard";

export const PopularProducts = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="font-palanquin font-bold text-4xl">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Uncover the perfect blend of design and performance. With Nike,
            comfort meets cutting-edge style in every pair.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductsCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </>
  );
};
