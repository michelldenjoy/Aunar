import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutHero from "../assets/about-hero.jpg";
import aboutTeam from "../assets/about-team.jpg";
import { Building2, HeartHandshake, Compass } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  // ✨ Variantes de animación reutilizables
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white text-slate-800">
      {/* 🌅 Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="Complejo Aunar"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          {/* 🔙 Botón Inicio */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm transition"
          >
            ← Inicio
          </button>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light mb-4"
          >
            Sobre <span className="font-semibold">AUNAR</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            Donde la arquitectura moderna se une con la naturaleza para crear
            espacios únicos y sostenibles.
          </motion.p>
        </div>
      </section>

      {/* 🏠 Quiénes somos */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Nuestra historia
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En AUNAR, creemos que los hogares deben ser más que simples
            estructuras: deben reflejar la armonía entre confort, innovación y
            sostenibilidad. Nuestro compromiso es crear comunidades que
            inspiren, donde la calidad de vida y la belleza arquitectónica se
            fusionen con el entorno natural.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Con años de experiencia en el desarrollo inmobiliario, trabajamos
            con los mejores arquitectos, diseñadores y profesionales del sector
            para ofrecer espacios que trascienden el concepto de vivienda.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src={aboutTeam}
            alt="Equipo Aunar"
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* 💫 Misión y Visión */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-light mb-12"
          >
            Nuestra filosofía
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[ 
              {
                Icon: Building2,
                title: "Calidad",
                desc: "Diseñamos con materiales de primera, cuidando cada detalle para garantizar espacios duraderos y elegantes.",
              },
              {
                Icon: HeartHandshake,
                title: "Compromiso",
                desc: "Nuestra prioridad son las personas: sus sueños, su bienestar y la conexión que crean con su entorno.",
              },
              {
                Icon: Compass,
                title: "Innovación",
                desc: "Exploramos nuevas formas de diseño y construcción, creando viviendas que miran al futuro con sostenibilidad.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition"
              >
                <Icon className="mx-auto text-teal-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
