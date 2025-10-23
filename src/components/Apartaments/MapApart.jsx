import React, { useState } from "react";
import { useApartment } from "../../hooks/useApartment";
import Modal from "../common /Modal";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react"; 

export default function MapApart() {
  const { apartments, setSelectedApartment } = useApartment();
  const [activeApartment, setActiveApartment] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (apartment) => {
    if (apartment.status === "available") {
      setSelectedApartment(apartment);
      setActiveApartment(apartment);
    }
  };

  const handleReserve = () => {
    navigate("/apartments/reservar");
  };

  return (
    <div className="relative">
      <div className="relative bg-slate-200 h-[500px] w-full rounded-xl overflow-hidden">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            onClick={() => handleSelect(apartment)}
            className={`absolute flex flex-col items-center transition-transform ${
              apartment.status === "available"
                ? "cursor-pointer hover:scale-105"
                : "cursor-not-allowed opacity-60"
            }`}
            style={{
              top: `${apartment.coordinates.y}%`,
              left: `${apartment.coordinates.x}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative">
              {/* foto mini */}
              <img
                src={apartment.image}
                alt={apartment.name}
                className={`w-16 h-16 rounded-full object-cover border-2 shadow-md ${
                  apartment.status === "available"
                    ? "border-teal-500"
                    : "border-gray-400 grayscale"
                }`}
              />

              {/* if reserved */}
              {apartment.status === "reserved" && (
                <>
                  <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
                    <Lock className="text-white w-5 h-5" />
                  </div>
                  
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full shadow-md opacity-100 transition">
                    Reservado
                  </span>
                </>
              )}
            </div>

            {/* if available */}
            <span
              className={`mt-1 text-xs px-2 py-1 rounded-full shadow-sm ${
                apartment.status === "available"
                  ? "bg-white/80 text-slate-800"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {apartment.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={!!activeApartment} onClose={() => setActiveApartment(null)}>
        {activeApartment && (
          <>
            <img
              src={activeApartment.image}
              alt={activeApartment.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-slate-800">
                {activeApartment.name}
              </h2>
              <p className="text-slate-600">{activeApartment.description}</p>
              <p className="text-slate-700">
                <strong>Área:</strong> {activeApartment.area}
              </p>
              <p className="text-slate-700">
                <strong>Precio:</strong> $
                {activeApartment.price.toLocaleString()}
              </p>

              {activeApartment.status === "reserved" && (
                <p className="mt-4 text-red-600 font-semibold">
                  ⚠️ Este apartamento ya está reservado.
                </p>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setActiveApartment(null)}
                  className="px-4 py-2 border rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cerrar
                </button>

                {activeApartment.status === "available" && (
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
