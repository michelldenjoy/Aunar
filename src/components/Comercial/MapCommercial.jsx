import React, { useState } from "react";
import { useCommercial } from "../../hooks/useCommercial";
import Modal from "../common /Modal";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react"; // ícono para propiedades reservadas

export default function MapCommercial() {
  const { commercials, setSelectedCommercial } = useCommercial();
  const [activeCommercial, setActiveCommercial] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (commercial) => {
    if (commercial.status === "available") {
      setSelectedCommercial(commercial);
      setActiveCommercial(commercial);
    }
  };

  const handleReserve = () => {
    navigate("/commercial/reservar");
  };

  return (
    <div className="relative">
      
      <div className="relative bg-slate-200 h-[500px] w-full rounded-xl overflow-hidden">
        {commercials.map((commercial) => (
          <div
            key={commercial.id}
            onClick={() => handleSelect(commercial)}
            className={`absolute flex flex-col items-center transition-transform ${
              commercial.status === "available"
                ? "cursor-pointer hover:scale-105"
                : "cursor-not-allowed opacity-60"
            }`}
            style={{
              top: `${commercial.coordinates.y}%`,
              left: `${commercial.coordinates.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              {/* Imagen miniatura */}
              <img
                src={commercial.image}
                alt={commercial.name}
                className={`w-16 h-16 rounded-full object-cover border-2 shadow-md ${
                  commercial.status === "available"
                    ? "border-teal-500"
                    : "border-gray-400 grayscale"
                }`}
              />

              {/* Sistema d reserva*/}
              {commercial.status === "reserved" && (
                <>
                  <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
                    <Lock className="text-white w-5 h-5" />
                  </div>
                  {/* Tooltip siempre visible */}
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full shadow-md opacity-100 transition">
                    Reservado
                  </span>
                </>
              )}
            </div>

            
            <span
              className={`mt-1 text-xs px-2 py-1 rounded-full shadow-sm ${
                commercial.status === "available"
                  ? "bg-white/80 text-slate-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {commercial.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!activeCommercial}
        onClose={() => setActiveCommercial(null)}
      >
        {activeCommercial && (
          <>
            <img
              src={activeCommercial.image}
              alt={activeCommercial.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-slate-800">
                {activeCommercial.name}
              </h2>
              <p className="text-slate-600">{activeCommercial.description}</p>
              <p className="text-slate-700">
                <strong>Área:</strong> {activeCommercial.area}
              </p>
              <p className="text-slate-700">
                <strong>Precio:</strong> $
                {activeCommercial.price.toLocaleString()}
              </p>

              {activeCommercial.status === "reserved" && (
                <p className="mt-4 text-red-600 font-semibold">
                  ⚠️ Este local ya está reservado.
                </p>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setActiveCommercial(null)}
                  className="px-4 py-2 border rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cerrar
                </button>

                {activeCommercial.status === "available" && (
                  <button
                    onClick={handleReserve}
                    className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
                  >
                    Reservar
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
