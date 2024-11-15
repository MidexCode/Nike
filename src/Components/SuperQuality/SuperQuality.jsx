import React from "react";
import Button from "../Button/Button";

export const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max:lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h2>

          <p className="font-montserrat text-slate-gray text-2xl mt-8 info-text lg:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance. <br />{" "}
            <br />
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>
      </section>
    </>
  );
};
