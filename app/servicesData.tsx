import {
  RectangleGroupIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const iconClasses = "w-14 h-14";

// List of services.
export const Services = [
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
      "Creo sitios y plataformas web que hacen que tu negocio funcione mejor y tus usuarios tengan una buena experiencia.",
    icon: <GlobeAltIcon className={iconClasses} />,
  },
  {
    title: "Integraciones",
    subtitle: "a medida",
    description:
      "Conecto tus sistemas y herramientas para que trabajen juntos, ahorrándote tiempo y dolores de cabeza.",
    icon: <PuzzlePieceIcon className={iconClasses} />,
  },
  {
    title: "Inteligencia",
    subtitle: "Artificial",
    description:
      "Implemento IA para automatizar tareas, ahorrar tiempo y mejorar la toma de decisiones.",
    icon: <Cog6ToothIcon className={iconClasses} />,
  },
];
