import React, { useState } from "react";

export default function Amenities() {
  const [activeAmenity, setActiveAmenity] = useState(null);
  const handleInteraction = (i) => {
    setActiveAmenity(activeAmenity === i ? null : i);
  };

  const amenities = [
    {
      name: "Piscina Infinita",
      description: "Vistas a la naturaleza",
      image: "/amenities/infinity.jpg",
    },
    {
      name: "Jardines",
      description: "Espacios para relajarte y desconectar",
      image: "/amenities/garden.jpg",
    },
    {
      name: "Parques infantiles",
      description: "Áreas seguras y divertidas para los más peques de la casa",
      image: "/amenities/kids.jpg",
    },
    {
      name: "Gimnasio",
      description: "Equipado con máquinas a estrenar de última generación",
      image: "/amenities/gym.jpg",
    },
    {
      name: "Wellness Center",
      description: "Spa y centro de bienestar",
      image: "/amenities/spa.jpg",
    },
    {
      name: "Zona Grill",
      description: "Espacios al aire libre para barbacoas",
      image: "/amenities/bbq.jpg",
    },
    {
      name: "Espacios para Eventos",
      description: "Espacios al aire libre para eventos y reuniones",
      image: "/amenities/events.jpg",
    },
    {
      name: "Sky Lounge",
      description: "Terraza panorámica",
      image: "/amenities/terrace.jpg",
    },
    {
      name: "Restaurante Gourmet",
      description: "Gastronomía selecta para nuestros socios",
      image: "/amenities/gourmet.jpg",
    },
    {
      name: "Seguridad 24/7",
      description: "Tranquilidad garantizada",
      image: "/amenities/security.jpg",
    },
    {
      name: "Parking",
      description: "Más de 200 plazas de estacionamiento",
      image: "/amenities/parking.jpg",
    },
    {
      name: "Pádel Courts",
      description: "Canchas profesionales de Pádel",
      image: "/amenities/paddle.jpg",
    },
  ];

  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      <section className="w-full bg-white relative overflow-hidden m-0 p-0">
        {/* Fondo decorativo */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full m-0 p-0">
          
          {/* mariconada decorativa */}
          <div className="text-center my-12 sm:my-16 lg:my-20 px-2">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-50 h-px bg-gradient-to-r from-elegant-navy via-sand-700 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-sand-700 animate-pulse" />
            <div className="w-50 h-px bg-gradient-to-r from-transparent via-sand-700 to-elegant-navy" />
          </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-stone-900 mb-4 sm:mb-6 tracking-tight">
              Comodidades que complementan tu estilo de vida
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-600 font-light leading-relaxed max-w-[90%] mx-auto">
              Cada espacio ha sido pensado para nutrir tu bienestar, inspirar tu
              creatividad y enriquecer tu día a día.
            </p>
          </div>

          {/* GRID sin márgenes laterales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] w-full">
            {amenities.map((amenity, i) => {
              const isActive = activeAmenity === i;
              return (
                <div
                  key={i}
                  className="relative group cursor-pointer touch-manipulation w-full"
                  onClick={() => handleInteraction(i)}
                  onMouseEnter={() => setActiveAmenity(i)}
                  onMouseLeave={() => setActiveAmenity(null)}
                >
                  <div
                    className={`relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "shadow-2xl shadow-teal-500/20 scale-[1.02] sm:scale-105"
                        : "shadow-md"
                    }`}
                  >
                    {/* Imagen */}
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                      style={{ backgroundImage: `url(${amenity.image})` }}
                    />

                    {/* Gradiente */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/30"
                          : "bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"
                      }`}
                    />

                    {/* Contenido */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 tracking-tight">
                        {amenity.name}
                      </h3>
                      <p
                        className={`text-sm sm:text-base text-white/80 font-light leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                      >
                        {amenity.description}
                      </p>

                      {/* Línea decorativa */}
                      <div className="mt-3 flex items-center gap-2">
                        <div
                          className={`h-0.5 rounded-full transition-all duration-500 ${
                            isActive ? "w-10 bg-teal-400" : "w-6 bg-white/40"
                          }`}
                        />
                        {isActive && (
                          <>
                            <div className="h-0.5 w-0.5 rounded-full bg-white/40" />
                            <div className="h-0.5 w-0.5 rounded-full bg-white/40" />
                          </>
                        )}
                      </div>
                    </div>

                     {/* Indicador en móvil 
                    <div
                      className={`absolute top-3 right-3 sm:hidden transition-all duration-300 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white" />
                      </div>
                    </div> */}
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
