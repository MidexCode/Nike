import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 cursor-pointer">
        <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
          <img src={imgURL} alt="" width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin leading-normal font-bold text-3xl">
          {label}
        </h3>
        <p className="mt-3 leading-normal text-lg font-montserrat break-words text-slate-gray">
          {subtext}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
