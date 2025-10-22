import React, { useState, useEffect, useRef, memo } from "react";

// 🔹 1. Definimos el array fuera del componente (evita recrearlo en cada render)
const amenities = [
  {
    name: "Piscina Infinita",
    description: "Vistas a la naturaleza",
    image: "/amenities/infinity.webp",
  },
  {
    name: "Jardines",
    description: "Espacios para relajarte y desconectar",
    image: "/amenities/garden.webp",
  },
  {
    name: "Parques infantiles",
    description: "Áreas seguras y divertidas para los más peques de la casa",
    image: "/amenities/kids.webp",
  },
  {
    name: "Gimnasio",
    description: "Equipado con máquinas de última generación",
    image: "/amenities/gym.webp",
  },
  {
    name: "Wellness Center",
    description: "Spa y centro de bienestar",
    image: "/amenities/spa.webp",
  },
  {
    name: "Zona Grill",
    description: "Espacios al aire libre para barbacoas",
    image: "/amenities/bbq.webp",
  },
  {
    name: "Espacios para Eventos",
    description: "Espacios al aire libre para eventos y reuniones",
    image: "/amenities/events.webp",
  },
  {
    name: "Sky Lounge",
    description: "Terraza panorámica con vistas espectaculares",
    image: "/amenities/terrace.webp",
  },
  {
    name: "Restaurante Gourmet",
    description: "Gastronomía selecta para nuestros socios",
    image: "/amenities/gourmet.webp",
  },
  {
    name: "Seguridad 24/7",
    description: "Tranquilidad garantizada",
    image: "/amenities/security.webp",
  },
  {
    name: "Parking",
    description: "Más de 200 plazas de estacionamiento",
    image: "/amenities/parking.webp",
  },
  {
    name: "Pádel Courts",
    description: "Canchas profesionales de pádel",
    image: "/amenities/paddle.webp",
  },
];

// 🔹 2. Hook para lazy loading de imágenes con IntersectionObserver
function useLazyImage(src) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        }),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible ? src : null];
}

// 🔹 3. Card individual optimizada con React.memo
const AmenityCard = memo(({ amenity, isActive, onInteraction }) => {
  const [ref, visibleSrc] = useLazyImage(amenity.image);

  return (
    <div
      className="group relative cursor-pointer touch-manipulation"
      onClick={onInteraction}
      onMouseEnter={onInteraction}
      onMouseLeave={() => onInteraction(null)}
      ref={ref}
    >
      <div
        className={`relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden transition-all duration-500 will-change-transform ${
          isActive
            ? "shadow-2xl shadow-teal-500/20 scale-[1.02] sm:scale-105"
            : "shadow-lg"
        }`}
      >
        {/* ✅ Imagen lazy-loaded */}
        {visibleSrc && (
          <img
            src={visibleSrc}
            alt={amenity.name}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 object-cover w-full h-full transition-transform duration-700 ${
              isActive ? "scale-110" : "scale-100"
            }`}
          />
        )}

        {/* Overlay gradiente */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/30"
              : "bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"
          }`}
        />

        {/* Contenido */}
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 tracking-tight">
            {amenity.name}
          </h3>
          <p
            className={`text-sm sm:text-base text-white/80 font-light leading-relaxed transition-all duration-500 ${
              isActive
                ? "opacity-100 translate-y-0 max-h-24"
                : "opacity-0 translate-y-2 max-h-0 sm:max-h-24 sm:opacity-0"
            }`}
          >
            {amenity.description}
          </p>

          {/* Barra decorativa */}
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <div
              className={`h-0.5 rounded-full transition-all duration-500 ${
                isActive
                  ? "w-10 sm:w-12 bg-teal-400"
                  : "w-6 sm:w-8 bg-white/40"
              }`}
            />
            <div
              className={`h-0.5 w-0.5 rounded-full bg-white/40 transition-all duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`h-0.5 w-0.5 rounded-full bg-white/40 transition-all duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Indicador visual móvil */}
        <div
          className={`absolute top-3 right-3 sm:hidden transition-all duration-300 ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default function Amenities() {
  const [activeAmenity, setActiveAmenity] = useState(null);

  const handleInteraction = (i) => {
    setActiveAmenity((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-stone-900 mb-4 sm:mb-6 tracking-tight px-4">
            Amenidades que complementan tu estilo de vida
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Cada espacio ha sido pensado para nutrir tu bienestar, inspirar tu creatividad y enriquecer tu día a día.
          </p>
        </div>

        {/* G R I D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {amenities.map((amenity, i) => (
            <AmenityCard
              key={i}
              amenity={amenity}
              isActive={activeAmenity === i}
              onInteraction={(val) => handleInteraction(val === null ? null : i)}
            />
          ))}
        </div>

        {/* Instrucción móvil */}
        <p className="text-center text-sm text-stone-400 mt-8 sm:hidden">
          Toca cada amenidad para ver más detalles
        </p>
      </div>
    </section>
  );
}
