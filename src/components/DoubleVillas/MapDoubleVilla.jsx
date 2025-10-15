// src/components/DoubleVillas/MapDoubleVilla.jsx
import React, { useState } from "react";
import { useDoubleVilla } from "../../hooks/useDoubleVilla";
import Modal from "../common /Modal";
import { useNavigate } from "react-router-dom";

export default function MapDoubleVilla() {
  const { doubleVillas, setSelectedDoubleVilla } = useDoubleVilla();
  const [activeVilla, setActiveVilla] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (villa) => {
    setSelectedDoubleVilla(villa);
    setActiveVilla(villa);
  };

  const handleReserve = () => {
    navigate("/double-villas/reservar");
  };

  return (
    <div className="relative">
      {/* Plano simulado */}
      <div className="relative bg-slate-200 h-[500px] w-full rounded-xl overflow-hidden">
        {doubleVillas.map((villa) => (
          <div
            key={villa.id}
            onClick={() => handleSelect(villa)}
            className="absolute flex flex-col items-center cursor-pointer select-none"
            style={{
              top: `${villa.coordinates.y}%`,
              left: `${villa.coordinates.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={villa.image}
              alt={villa.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md hover:scale-110 transition-transform"
            />
            <span className="mt-1 text-xs bg-white/80 px-2 py-1 rounded-full text-slate-700 shadow">
              {villa.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal con información */}
      <Modal isOpen={!!activeVilla} onClose={() => setActiveVilla(null)}>
        {activeVilla && (
          <>
            <img
              src={activeVilla.image}
              alt={activeVilla.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">{activeVilla.name}</h2>
              <p className="text-slate-600">{activeVilla.description}</p>
              <p className="text-slate-700">
                <strong>Área:</strong> {activeVilla.area}
              </p>
              <p className="text-slate-700">
                <strong>Precio:</strong> ${activeVilla.price.toLocaleString()}
              </p>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setActiveVilla(null)}
                  className="px-4 py-2 border rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleReserve}
                  className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
                >
                  Reservar
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
