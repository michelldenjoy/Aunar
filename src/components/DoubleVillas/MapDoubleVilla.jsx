// src/components/DoubleVillas/MapDoubleVilla.jsx
import React, { useState } from "react";
import { useDoubleVilla } from "../../hooks/useDoubleVilla";
import Modal from "../common /Modal";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

export default function MapDoubleVilla() {
  const { doubleVillas, setSelectedDoubleVilla } = useDoubleVilla();
  const [activeVilla, setActiveVilla] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (villa) => {
    if (villa.status === "available") {
      setSelectedDoubleVilla(villa);
      setActiveVilla(villa);
    }
  };

  const handleReserve = () => {
    navigate("/double-villas/reservar");
  };

  return (
    <div className="relative">
      <div className="relative bg-slate-200 h-[500px] w-full rounded-xl overflow-hidden">
        {doubleVillas.map((villa) => (
          <div
            key={villa.id}
            onClick={() => handleSelect(villa)}
            className={`absolute flex flex-col items-center transition-transform ${
              villa.status === "available"
                ? "cursor-pointer hover:scale-105"
                : "cursor-not-allowed opacity-60"
            }`}
            style={{
              top: `${villa.coordinates.y}%`,
              left: `${villa.coordinates.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative group">
              {/* foto mini */}
              <img
                src={villa.image}
                alt={villa.name}
                className={`w-16 h-16 rounded-full object-cover border-2 shadow-md ${
                  villa.status === "available"
                    ? "border-teal-500"
                    : "border-gray-400 grayscale"
                }`}
              />

              {/*if reserved*/}
              {villa.status === "reserved" && (
                <>
                  <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
                    <Lock className="text-white w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full shadow-md opacity-100 transition">
                    Reservada
                  </span>
                </>
              )}
            </div>

            <span
              className={`mt-1 text-xs px-2 py-1 rounded-full shadow-sm ${
                villa.status === "available"
                  ? "bg-white/80 text-slate-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {villa.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={!!activeVilla} onClose={() => setActiveVilla(null)}>
        {activeVilla && (
          <>
            <img
              src={activeVilla.image}
              alt={activeVilla.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-slate-800">
                {activeVilla.name}
              </h2>
              <p className="text-slate-600">{activeVilla.description}</p>
              <p className="text-slate-700">
                <strong>Área:</strong> {activeVilla.area}
              </p>
              <p className="text-slate-700">
                <strong>Precio:</strong> ${activeVilla.price.toLocaleString()}
              </p>

              {/* Mostrar aviso si está reservada */}
              {activeVilla.status === "reserved" && (
                <p className="mt-4 text-red-600 font-semibold">
                  ⚠️ Esta propiedad ya está reservada.
                </p>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setActiveVilla(null)}
                  className="px-4 py-2 border rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cerrar
                </button>

                {activeVilla.status === "available" && (
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
