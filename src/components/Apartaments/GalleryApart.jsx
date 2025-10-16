// src/components/Apartments/GalleryApartment.jsx
import React from "react";
import apartment1 from "../../assets/apartment1.jpg";
import apartment2 from "../../assets/apartment2.jpg";
import apartment3 from "../../assets/apartment3.jpg";
import apartment4 from "../../assets/apartment4.jpg";

export default function GalleryApartment() {
  const images = [
    {
      id: 1,
      src: apartment1,
      title: "Vista al mar",
      desc: "Espacios abiertos y una vista panorámica increíble.",
    },
    {
      id: 2,
      src: apartment2,
      title: "Diseño contemporáneo",
      desc: "Líneas modernas, materiales nobles y confort premium.",
    },
    {
      id: 3,
      src: apartment3,
      title: "Interiores luminosos",
      desc: "Luz natural en cada rincón para una vida más relajada.",
    },
    {
      id: 4,
      src: apartment4,
      title: "Comodidad urbana",
      desc: "Diseñado para el equilibrio perfecto entre lujo y ciudad.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
          Galería de Apartamentos
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Explora los espacios, la arquitectura y la elegancia de nuestros
          apartamentos diseñados para el confort y el estilo de vida moderno.
        </p>

        {/* 🏙️ Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {img.title}
                </h3>
                <p className="text-white/90 text-sm mt-2">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
