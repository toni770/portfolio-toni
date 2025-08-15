export type project = {
  name: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  link?: string;
  tags: string[];
};

const projectData: project[] = [
  {
    name: "No.Flights",
    description: "Plataforma de reserva de vuelos privados de último minuto.",
    problem:
      "Se requería una solución digital que permitiera reservar vuelos privados de forma rápida e intuitiva, reduciendo la fricción del proceso tradicional.",
    solution:
      "Desarrollo de una aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas y operadores de jets privados, permitiendo completar reservas en pocos pasos.",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "Integración con pasarela de pago",
    ],
    image: "/MockUpNoFlights.png",
    tags: ["App"],
  },
  {
    name: "KheirApp",
    description: "Noticias, localización e información de mezquitas en España.",
    problem:
      "Las comunidades musulmanas carecían de una plataforma centralizada para encontrar mezquitas cercanas y mantenerse informadas sobre noticias y eventos relevantes.",
    solution:
      "Desarrollo de una aplicación móvil que permite localizar mezquitas en España mediante geolocalización y recibir notificaciones con las últimas novedades.",
    technologies: ["React Native", "Push Notifications", "Backoffice"],
    image: "/MockUpKheirApp.png",
    link: "https://kheirapp.com",
    tags: ["App"],
  },
  {
    name: "Daia",
    description:
      "Asistente personal de salud con IA para el tratamiento de la diabetes.",
    problem:
      "Las personas con diabetes tipo 1 y tipo 2 necesitaban una forma más eficiente, personalizada y menos estresante de gestionar su salud diaria.",
    solution:
      "App que recopila y analiza datos en tiempo real, ofreciendo recomendaciones personalizadas mediante inteligencia artificial para mejorar el control de la enfermedad.",
    technologies: ["React Native", "API Integrations", "Chat", "AI"],
    image: "/MockUpDaia.png",
    link: "https://daia.pro/",
    tags: ["App", "AI"],
  },
  {
    name: "Megafactory",
    description: "E-commerce de electrodomésticos integrado con ERP.",
    problem:
      "La empresa necesitaba una plataforma de venta online que permitiera comercializar sus productos y, al mismo tiempo, estuviera conectada a su sistema ERP para mantener la gestión centralizada.",
    solution:
      "Desarrollo de una tienda online de electrodomésticos totalmente integrada con el ERP de la empresa, sincronizando pedidos, usuarios y productos.",
    technologies: ["Web", "WordPress", "API Integration", "E-commerce"],
    image: "/MockUpMegafactory.png",
    link: "https://megafactory.es",
    tags: ["Web", "Integraciones"],
  },
  {
    name: "Voleijam",
    description: "Plataforma web para la gestión de torneos de vóley playa.",
    problem:
      "La web existente para gestionar torneos de vóley playa era limitada y no cubría las necesidades específicas del cliente.",
    solution:
      "Rediseño y mejora del sistema de gestión, adaptándolo a los requisitos concretos del cliente para ofrecer una solución más completa, flexible y eficiente.",
    technologies: ["React"],
    image: "/MockUpVoleiJam.png",
    link: "https://voleijam.cat",
    tags: ["Web"],
  },
  {
    name: "Boatcare",
    description: "Plataforma de mantenimiento y reparación de embarcaciones.",
    problem:
      "Se requería una aplicación que centralizara y facilitara la gestión de servicios de mantenimiento y reparación para propietarios de embarcaciones.",
    solution:
      "Plataforma digital que conecta a propietarios de embarcaciones con proveedores especializados, permitiendo solicitar, gestionar y seguir servicios de mantenimiento y reparación desde web o móvil.",
    technologies: ["WordPress", "Web", "React Native"],
    image: "/MockUpBoatCare.png",
    tags: ["App"],
  },
  {
    name: "Magical Smile",
    description: "Videojuego móvil para niños pequeños.",
    problem:
      "El cliente buscaba crear una marca orientada a juegos y contenido visual para niños pequeños, necesitando un videojuego que reforzara su identidad y resultara atractivo.",
    solution:
      "Desarrollo de un juego para móviles y tablets con una estética alegre, colorida y adaptada al gusto infantil, cumpliendo con las especificaciones del cliente.",
    technologies: ["Unity"],
    image: "/MockUpMagical.png",
    tags: ["App"],
  },
];

export default projectData;
