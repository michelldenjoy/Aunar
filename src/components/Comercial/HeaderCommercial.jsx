import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import videoCommercial from "../../assets/commercialheader.mp4";

export default function HeaderCommercial() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (slug) => pathname.includes(slug);

  return (
    <header className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-slate-900">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={videoCommercial}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

      <nav className="relative z-20 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full border border-white/10 transition"
        >
          ← Inicio
        </button>

        <div className="flex items-center space-x-2 bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm">
          <button
            onClick={() => navigate("/commercial/imagenes")}
            className={`px-4 py-2 rounded-full text-sm transition ${
              isActive("imagenes")
                ? "bg-white text-slate-900"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            Imágenes
          </button>

          <button
            onClick={() => navigate("/commercial/plano")}
            className={`px-4 py-2 rounded-full text-sm transition ${
              isActive("plano")
                ? "bg-white text-slate-900"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            Plano
          </button>

          <button
            onClick={() => navigate("/commercial/reservar")}
            className={`px-4 py-2 rounded-full text-sm transition ${
              isActive("reservar")
                ? "bg-white text-slate-900"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            Reservar
          </button>
        </div>
      </nav>

      <div className="relative z-20 max-w-6xl mx-auto px-6 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light drop-shadow-lg">
            Espacios Comerciales
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Descubre locales modernos, estratégicamente ubicados dentro del complejo.
          </p>
        </div>
      </div>
    </header>
  );
}

