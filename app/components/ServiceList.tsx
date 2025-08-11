import { UsersIcon } from "@heroicons/react/16/solid";
import React from "react";
import ServiceCard from "./ServiceCard";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

const iconClasses = "w-14 h-14";
const Services = [
  {
    title: "App",
    subtitle: "IOS/Android",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <RectangleGroupIcon className={iconClasses} />,
  },
  {
    title: "Desarrollo",
    subtitle: "Web",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <GlobeAltIcon className={iconClasses} />,
  },
  {
    title: "Integraciones",
    subtitle: "a medida",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <PuzzlePieceIcon className={iconClasses} />,
  },
  {
    title: "Inteligencia",
    subtitle: "Artificial",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <UsersIcon className={iconClasses} />,
  },
];
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
