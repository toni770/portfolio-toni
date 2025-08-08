import { UsersIcon } from "@heroicons/react/16/solid";
import React from "react";
import ServiceCard from "./ServiceCard";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";

const Services = [
  {
    title: "App",
    subtitle: "IOS/Android",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <RectangleGroupIcon className="w-15 h-15" />,
  },
  {
    title: "Desarrollo",
    subtitle: "Web",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <GlobeAltIcon className="w-15 h-15" />,
  },
  {
    title: "Integraciones",
    subtitle: "a medida",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <PuzzlePieceIcon className="w-15 h-15" />,
  },
  {
    title: "Inteligencia",
    subtitle: "Artificial",
    description:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas",
    icon: <UsersIcon className="w-15 h-15" />,
  },
];
const ServiceList = () => {
  return (
    <div className="flex gap-5 justify-center items-center p-7 pb-20 text-black">
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
