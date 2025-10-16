import React from "react";
import local1 from "../../assets/local1.jpg";
import local2 from "../../assets/local2.jpg";
import local3 from "../../assets/local3.jpg";
import local4 from "../../assets/local4.jpg";

export default function GalleryCommercial() {
  const images = [
    {
      id: 1,
      src: local1,
      title: "Espacios Modernos",
      desc: "Locales amplios y versátiles, ideales para negocios contemporáneos.",
    },
    {
      id: 2,
      src: local2,
      title: "Ubicación Estratégica",
      desc: "En el corazón del complejo, con alto flujo de visitantes.",
    },
    {
      id: 3,
      src: local3,
      title: "Diseño Vanguardista",
      desc: "Fachadas elegantes con materiales de alta calidad.",
    },
    {
      id: 4,
      src: local4,
      title: "Conectividad Total",
      desc: "Fácil acceso a estacionamiento, transporte y zonas residenciales.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🏢 Título */}
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
          Galería de Espacios Comerciales
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Conoce los locales diseñados para destacar tu marca, optimizar el
          espacio y ofrecer la mejor experiencia a tus clientes.
        </p>

        {/* 🖼️ Grid de imágenes */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
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
