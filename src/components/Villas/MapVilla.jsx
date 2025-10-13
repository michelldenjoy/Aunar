import React, { useState } from "react";
import { useVilla } from "../../hooks/useVilla";
import Modal from "../common /Modal";
import { useNavigate } from "react-router-dom";

export default function MapVilla() {
  const { villas, setSelectedVilla } = useVilla();
  const [activeVilla, setActiveVilla] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (villa) => {
    setSelectedVilla(villa);
    setActiveVilla(villa);
  };

  const handleReserve = () => {
    navigate("/villas/reservar");
  };
  console.log(villas);
  return (
    <div className="relative">
      <div className="relative bg-slate-200 h-[500px] w-full rounded-xl overflow-hidden">
        {villas.map((villa) => (
          <div
            key={villa.id}
            style={{
              position: "absolute",
              top: `${villa.coordinates.y}%`,
              left: `${villa.coordinates.x}%`,
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
            onClick={() => handleSelect(villa)}
          >
            <img
              src={villa.image}
              alt={villa.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md hover:scale-110 transition-transform"
            />
            <p className="text-xs text-center mt-1 font-medium">{villa.name}</p>
          </div>
        ))}
      </div>

      {/* Modal reutilizable */}
      <Modal isOpen={!!activeVilla} onClose={() => setActiveVilla(null)}>
        {activeVilla && (
          <>
            <img
              src={activeVilla.image}
              alt={activeVilla.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-4">
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
