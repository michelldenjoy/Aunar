import React from "react";
import { useState } from "react";

import { Home, Users, Sparkles, Shield, CreditCard, Heart } from "lucide-react";

export default function FeatureHome() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Inversión Segura",
      description:
        "Desarrollador con trayectoria probada y garantías respaldadas",
    },
    {
      icon: Users,
      title: "Comunidad Vibrante",
      description:
        "Un espacio diseñado para conectar con personas extraordinarias",
    },
    {
      icon: Sparkles,
      title: "Diseño Excepcional",
      description: "Cada detalle pensado para elevar tu experiencia diaria",
    },
    {
      icon: CreditCard,
      title: "Flexibilidad Financiera",
      description: "Planes de pago adaptados a tu ritmo y necesidades",
    },
    {
      icon: Heart,
      title: "Servicio Personalizado",
      description: "Acompañamiento desde la reserva hasta la entrega de llaves",
    },
    {
      icon: Home,
      title: "Lifestyle Integral",
      description: "Vive, trabaja y disfruta en un mismo ecosistema",
    },
  ];
  return (
    <div >
      
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6 tracking-tight">
              Por Qué Elegirnos
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto font-light">
              Nos dedicamos a crear más que espacios, construimos experiencias
              que transforman vidas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group"
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className={`h-full bg-white rounded-3xl p-8 transition-all duration-500 border-2 ${
                      hoveredFeature === i
                        ? "border-teal-400 shadow-2xl shadow-teal-100/50 -translate-y-1"
                        : "border-stone-200 shadow-lg"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                        hoveredFeature === i
                          ? "bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-500/30"
                          : "bg-stone-100"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 transition-colors duration-500 ${
                          hoveredFeature === i ? "text-white" : "text-stone-700"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
