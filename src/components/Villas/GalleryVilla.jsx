import React from "react";
import { motion } from "framer-motion";
import villaExterior from "../../assets/Villa1.jpg";
import villaInterior from "../../assets/Villa2.jpg";
import villaPool from "../../assets/Villa3.jpg";
import villaLiving from "../../assets/Villa4.jpg";

export default function GalleryVilla() {
  const images = [
    {
      id: 1,
      src: villaExterior,
      title: "Diseño moderno",
      desc: "Fachadas limpias, materiales nobles y armonía arquitectónica en todo el conjunto.",
    },
    {
      id: 2,
      src: villaLiving,
      title: "Piscina privada",
      desc: "Cada villa cuenta con piscina y zonas ajardinadas que garantizan privacidad y confort.",
    },
    {
      id: 3,
      src: villaPool,
      title: "Espacios luminosos",
      desc: "Interiores amplios con ventanales panorámicos que conectan con la naturaleza.",
    },
    {
      id: 4,
      src: villaInterior,
      title: "Detalles de lujo",
      desc: "Acabados premium, diseño funcional y materiales sostenibles en cada estancia.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light text-slate-900 mb-6"
        >
          Villas del Complejo AUNAR
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-600 max-w-2xl mx-auto mb-12"
        >
          Cada villa ha sido diseñada para equilibrar elegancia y funcionalidad,
          ofreciendo espacios acogedores rodeados de naturaleza.
        </motion.p>

        {/* 🖼️ Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold">
                  {img.title}
                </h3>
                <p className="text-white/90 text-sm mt-2">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
