// src/components/DoubleVillas/HeaderDoubleVilla.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderDoubleVilla() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (slug) => pathname.includes(slug);

  return (
    <>
      {/* hero */}
      <header className="relative h-[70vh] md:h-[70vh] overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="/doubleVilla.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

        {/* inicio */}
        <nav className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            <span className="font-medium">Inicio</span>
          </button>
        </nav>

        {/* titulo */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Villas
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent mt-2">
                Dobles
              </span>
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explora nuestras Villas Dobles y vive la experiencia AUNAR en grande.
            </p>
          </div>
        </div>
      </header>

      {/* submenu */}
      <div className="sticky top-0 z-40 bg-[#fdfdfb]/95 backdrop-blur-md border-b border-[#ede9e0]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-6 relative">
            <nav className="relative flex bg-[#f5f3ee] rounded-2xl border border-[#eae7df] shadow-sm overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">

              {/* slide*/}
              <div
                className={`absolute top-0 left-0 h-full w-1/2 bg-elegant-navy rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-[0_0_20px_rgba(0,0,0,0.1)]`}
                style={{
                  transform: isActive("imagenes")
                    ? "translateX(0%)"
                    : "translateX(100%)",
                }}
              />

              {/* Botones */}
              {[
                { name: "Imágenes", route: "imagenes" },
                { name: "Plano", route: "plano" },
              ].map((item) => (
                <button
                  key={item.route}
                  onClick={() => navigate(`/double-villas/${item.route}`)}
                  className={`relative z-10 flex-1 px-6 sm:px-10 py-3 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300
                    ${
                      isActive(item.route)
                        ? "text-white"
                        : "text-[#5b554e] hover:text-elegant-navy"
                    }`}
                >
                  <span className="relative flex items-center justify-center">
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
