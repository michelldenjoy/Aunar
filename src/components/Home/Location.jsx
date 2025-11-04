import React from "react";

export default function Location() {
  const locations = [
    {
      time: "5 min",
      place: "Playa Principal",
      icon: "/icons/beach.svg",
    },
    {
      time: "8 min",
      place: "Marina",
      icon: "/icons/marina.svg",
    },
    {
      time: "12 min",
      place: "Centro Comercial",
      icon: "/icons/mall.svg",
    },
    {
      time: "15 min",
      place: "Aeropuerto",
      icon: "/icons/airport.svg",
    },
    {
      time: "10 min",
      place: "Campo de Golf",
      icon: "/icons/golf.svg",
    },
    {
      time: "20 min",
      place: "Punta Cana Centro",
      icon: "/icons/downtown.svg",
    },
  ];

  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-texture text-sand-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-elegant-navy md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Todo a Tu Alcance
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
              Conectividad perfecta con los destinos más importantes de la
              ciudad
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 sm:gap-4 bg-neutral-100 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 hover:border-teal-800 transition-all duration-300 min-h-[100px]"
              >
                <div className="flex-shrink-0">
                  {typeof loc.icon === "string" ? (
                    <img src={loc.icon} alt={loc.place} className="w-8 h-8" />
                  ) : (
                    loc.icon
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl sm:text-2xl font-medium text-elegant-navy mb-1">
                    {loc.time}
                  </div>
                  <div className="text-[11px] sm:text-sm text-elegant-navy font-semibold truncate">
                    {loc.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
