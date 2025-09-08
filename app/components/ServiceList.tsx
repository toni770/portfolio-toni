import React from "react";
import ServiceCard from "./ServiceCard";
import { Services } from "../servicesData";

// List of Services in About Page.
const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-7 md:pb-20 text-black">
      {Services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          subtitle={service.subtitle}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServiceList;
