import React from "react";
import ServiceCard from "./ServiceCard";
import {
  RectangleGroupIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const iconClasses = "w-14 h-14";
const Services = [
  {
    title: "App",
    subtitle: "IOS/Android",
    description:
      "Desarrollo aplicaciones móviles que funcionan de verdad, resolviendo necesidades reales de tu negocio, sin complicaciones.",
    icon: <RectangleGroupIcon className={iconClasses} />,
  },
  {
    title: "Desarrollo",
    subtitle: "Web",
    description:
      "Creo sitios y plataformas web que hacen que tu negocio funcione mejor y tus usuarios tengan una experiencia clara y eficiente.",
    icon: <GlobeAltIcon className={iconClasses} />,
  },
  {
    title: "Integraciones",
    subtitle: "a medida",
    description:
      "Conecto tus sistemas y herramientas para que trabajen juntos sin fricciones, ahorrándote tiempo y dolores de cabeza.",
    icon: <PuzzlePieceIcon className={iconClasses} />,
  },
  {
    title: "Inteligencia",
    subtitle: "Artificial",
    description:
      "Implemento soluciones de IA prácticas que automatizan tareas y mejoran la toma de decisiones, de manera directa y útil.",
    icon: <Cog6ToothIcon className={iconClasses} />,
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
