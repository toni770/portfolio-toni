export type project = {
  name: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  tags: string[];
  links?: {
    name?: string;
    url: string;
    type?: "reward";
  }[];
  gif?: { platform: "mobile" | "pc"; url: string };
};

const projectData: project[] = [
  {
    name: "Magical Smile",
    description: "Videojuego móvil para niños pequeños.",
    problem:
      "El cliente buscaba crear una marca orientada a juegos y contenido visual para niños pequeños, necesitando un videojuego que reforzara su identidad y resultara atractivo.",
    solution:
      "Un videojuego para móviles y tablets con una estética alegre, colorida y adaptada al gusto infantil, cumpliendo con las especificaciones del cliente.",
    technologies: ["Unity", "Android", "IOS"],
    image: "/projects/images/MockUpMagical.png",
    tags: ["App"],
    gif: {
      platform: "mobile",
      url: "/projects/gif/magicalSmile.gif",
    },
  },
  {
    name: "No.Flights",
    description: "Plataforma de reserva de vuelos privados de último minuto.",
    problem:
      "Se necesitaba una plataforma que permitiera reservar vuelos de último minuto de forma rápida e intuitiva, quitando la complejidad del proceso tradicional.",
    solution:
      "Aplicación móvil sencilla e intuitiva que se conecta en tiempo real con aerolíneas y operadores de jets privados, permitiendo completar reservas en pocos pasos.",
    technologies: ["React Native", "Node.js", "Express.js", "Pasarela de pago"],
    image: "/projects/images/MockUpNoFlights.jpg",
    tags: ["App"],
    links: [
      {
        url: "https://www.elpuntavui.cat/societat/article/2356498-l-aplicacio-no-flights-guanya-la-dotzena-mostra-d-emprenedors-de-girona.html",
        type: "reward",
        name: "12ª Mostra d'Emprenedors de Girona",
      },
    ],
    gif: {
      platform: "mobile",
      url: "/projects/gif/noflights.gif",
    },
  },
  {
    name: "KheirApp",
    description: "Noticias, localización e información de mezquitas en España.",
    problem:
      "Las comunidades musulmanas carecían de una plataforma centralizada para encontrar mezquitas cercanas y mantenerse informadas sobre noticias y eventos relevantes.",
    solution:
      "Aplicación móvil que permite localizar mezquitas en España mediante geolocalización y recibir notificaciones con las últimas novedades.",
    technologies: ["React Native", "Notificaciones Push", "Wordpress"],
    image: "/projects/images/MockUpKheirApp.png",
    links: [
      {
        url: "https://kheirapp.com",
      },
    ],
    tags: ["App"],
    gif: {
      platform: "mobile",
      url: "/projects/gif/kheirapp.gif",
    },
  },
  {
    name: "Daia",
    description:
      "Asistente personal de salud con IA para el tratamiento de la diabetes.",
    problem:
      "Las personas con diabetes tipo 1 y tipo 2 necesitaban una forma más eficiente, personalizada y menos estresante de gestionar su salud diaria.",
    solution:
      "App que recopila y analiza datos en tiempo real, ofreciendo recomendaciones personalizadas mediante inteligencia artificial para mejorar el control de la enfermedad.",
    technologies: ["React Native", "Integración API", "Chat", "AI"],
    image: "/projects/images/MockUpDaia.png",
    links: [
      {
        url: "https://daia.pro/",
      },
      {
        url: "https://www.diaridegirona.cat/economia/2025/01/23/guardonen-aplicacio-per-gestionar-diabetis-113648917.html",
        type: "reward",
        name: "Impulsa Startup",
      },
    ],
    tags: ["App", "AI"],
    gif: {
      platform: "mobile",
      url: "/projects/gif/daia.gif",
    },
  },
  {
    name: "Megafactory",
    description: "E-commerce de electrodomésticos integrado con ERP.",
    problem:
      "La empresa necesitaba una plataforma de venta online que permitiera comercializar sus productos y estuviera conectada a su sistema ERP para una gestión centralizada.",
    solution:
      "Tienda online de electrodomésticos totalmente integrada con el ERP de la empresa, sincronizando pedidos, usuarios y productos.",
    technologies: ["Web", "WordPress", "Integración API", "E-commerce"],
    image: "/projects/images/MockUpMegafactory.png",
    links: [
      {
        url: "https://megafactory.es",
      },
    ],
    tags: ["Web", "Integraciones"],
    gif: {
      platform: "pc",
      url: "/projects/gif/megafactory.gif",
    },
  },
  {
    name: "Voleijam",
    description: "Plataforma web para la gestión de torneos de vóley playa.",
    problem:
      "La web existente para gestionar torneos de vóley playa era limitada y no cubría las necesidades del cliente.",
    solution:
      "Rediseño y mejora del sistema de gestión, adaptándolo a los requisitos del cliente para ofrecer una web más completa, flexible y eficiente.",
    technologies: ["React", "Firebase", "Firestore"],
    image: "/projects/images/MockUpVoleiJam.png",
    links: [
      {
        url: "https://voleijam.cat",
      },
    ],
    tags: ["Web"],
    gif: {
      platform: "pc",
      url: "/projects/gif/voleijam.gif",
    },
  },
  {
    name: "Boatcare",
    description: "Plataforma de mantenimiento y reparación de embarcaciones.",
    problem:
      "Se necesitaba una aplicación que centralizara y facilitara la gestión de servicios de mantenimiento y reparación para propietarios de embarcaciones.",
    solution:
      "Aplicación que conecta a propietarios de embarcaciones con proveedores especializados, permitiendo solicitar, gestionar y seguir servicios de mantenimiento y reparación desde web o móvil.",
    technologies: ["WordPress", "Pasarela de pago", "React Native"],
    image: "/projects/images/MockUpBoatCare.png",
    tags: ["App"],
    gif: {
      platform: "mobile",
      url: "/projects/gif/boatcare.gif",
    },
  },
];

export default projectData;
