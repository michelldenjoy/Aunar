import React from 'react'

export default function Location() {

    const locations = [
        {
          time: "4 min",
          place: "Playa Principal",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <path d="M22 10a3 3 0 0 0-3-3v.5" />
            </svg>
          ),
        },
        {
          time: "10 min",
          place: "Marina Internacional",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M2 21c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1 .6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1c.6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1" />
              <path d="M10 4 8 8l-6 4 2 2 6-2 2 6h2l2-6 6 2 2-2-6-4-2-4z" />
            </svg>
          ),
        },
        {
          time: "12 min",
          place: "Centro Comercial",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
              <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
            </svg>
          ),
        },
        {
          time: "15 min",
          place: "Aeropuerto",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          ),
        },
        {
          time: "20 min",
          place: "Campo de Golf",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="10" r="8" />
              <line x1="12" y1="2" x2="12" y2="10" />
              <path d="M8 22h8" />
              <path d="M12 18v4" />
            </svg>
          ),
        },
        {
          time: "25 min",
          place: "Distrito Financiero",
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          ),
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-neutral-100 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-800 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-50 to-sand-600 flex items-center justify-center text-2xl shadow-lg shadow-black-500/20">
                    {loc.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-medium text-elegant-navy mb-1">
                    {loc.time}
                  </div>
                  <div className="text-sm text-elegant-navy font-semibold">
                    {loc.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
