import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
 

export default function HeaderApartment() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (slug) => pathname.includes(slug);

  return (
<>
      <header className="relative h-[70vh] md:h-[70vh] overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="/apartmentheader.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

        {/* Solo botón de inicio en el header */}
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

        <div className="relative z-20 max-w-6xl mx-auto px-6 flex items-center justify-center h-full">
          <div className="text-center text-white">
            {/* titulo */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Apartamentos
              </span>
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent mt-2">
                Unicos
              </span>
            </h1>
            <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explora nuestra galeria y empieza a construir tu futuro.
            </p>
          </div>
        </div>
      </header>

      {/* Menú de navegación debajo del header */}
      <div className="sticky top-0 z-40 bg-[#fdfdfb]/95 backdrop-blur-md border-b border-[#ede9e0]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center py-6 relative">
            <nav className="relative flex bg-[#f5f3ee] rounded-2xl border border-[#eae7df] shadow-sm overflow-hidden">
              {/* Fondo deslizante */}
              <div
                className={`absolute top-0 left-0 h-full w-1/3 bg-elegant-navy p-7 rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] shadow-[0_0_20px_rgba(0,0,0,0.1)]`}
                style={{
                  transform: isActive("imagenes")
                    ? "translateX(0%)"
                    : isActive("plano")
                    ? "translateX(100%)"
                    : "translateX(200%)",
                }}
              />

              {/* Botones tipo pestaña */}
              {[
                { name: "Imágenes", route: "imagenes" },
                { name: "Plano", route: "plano" },
                { name: "Reservar", route: "reservar" },
              ].map((item, index) => (
                <button
                  key={item.route}
                  onClick={() => navigate(`/apartments/${item.route}`)}
                  className={`relative z-10 flex-1 px-10 py-3 text-sm font-semibold tracking-wide transition-all duration-300
              ${
                isActive(item.route)
                  ? "text-white"
                  : "text-[#5b554e] hover:text-elegant-navy"
              }`}
                >
                  <span className="relative flex items-center justify-center">
                    {item.name}
                  </span>

                  {/* Efecto decorativo inferior tipo “ficha” */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-[2px] rounded-full transition-all duration-300
                ${
                  isActive(item.route)
                    ? "bg-white scale-x-100"
                    : "bg-transparent scale-x-0"
                }`}
                  ></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
