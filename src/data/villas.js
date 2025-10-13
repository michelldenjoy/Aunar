// src/data/villas.js
const villas = [
    {
      id: "V001",
      name: "Villa Azul",
      short: "Frente al mar · 3 habitaciones",
      price: 450,
      coords: { x: 20, y: 35 }, // % positions on the SVG/map
      images: ["/assets/villas/villa-azul-1.jpg", "/assets/villas/villa-azul-2.jpg"],
      virtualTourUrl: "https://your-360-tour.example/v001",
      description: "Villa con piscina privada y vistas al mar.",
    },
    {
      id: "V002",
      name: "Villa Sol",
      short: "Piscina · Jardín amplio",
      price: 390,
      coords: { x: 55, y: 48 },
      images: ["/assets/villas/villa-sol-1.jpg"],
      virtualTourUrl: "https://your-360-tour.example/v002",
      description: "Diseño moderno y grandes ventanales.",
    },
    // ...más villas
  ];
  
  export default villas;
  