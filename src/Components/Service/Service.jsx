import React from "react";
import { services } from "../Constants/constants.index";
import ServiceCard from "./ServiceCard";

export const Service = () => {
  return (
    <>
      <section className="max-container flex flex-wrap justify-center gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </>
  );
};
