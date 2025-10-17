import React from "react";
import { motion } from "framer-motion";
import doubleFront from "../../assets/doubleFront.jpg";
import doubleInterior from "../../assets/doubleInterior.jpg";
import doubleTerrace from "../../assets/doubleTerrace.jpg";
import doubleGarden from "../../assets/doubleGarden.jpg";

export default function GalleryDoubleVilla() {
  const images = [
    {
      id: 1,
      src: doubleFront,
      title: "Arquitectura equilibrada",
      desc: "Diseño simétrico y líneas modernas que crean una estética armoniosa.",
    },
    {
      id: 2,
      src: doubleTerrace,
      title: "Zonas compartidas",
      desc: "Amplias terrazas y áreas comunes ideales para disfrutar en compañía.",
    },
    {
      id: 3,
      src: doubleGarden,
      title: "Naturaleza integrada",
      desc: "Cada dúplex se rodea de jardines y espacios verdes con privacidad.",
    },
    {
      id: 4,
      src: doubleInterior,
      title: "Interior contemporáneo",
      desc: "Ambientes cálidos con materiales naturales y acabados sofisticados.",
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
          Doble Villas del Complejo AUNAR
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-600 max-w-2xl mx-auto mb-12"
        >
          Diseñadas para combinar independencia y convivencia, las Doble Villas
          ofrecen espacios compartidos con el mismo nivel de detalle y
          elegancia.
        </motion.p>

        {/* imagenes */}
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
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
    opacity-100 sm:opacity-0 group-hover:opacity-100
    transition-opacity duration-500 flex flex-col justify-end p-6"
              >
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
