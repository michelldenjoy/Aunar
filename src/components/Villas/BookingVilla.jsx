import React from "react";
import { useVilla } from "../../hooks/useVilla";

export default function BookingVilla() {
  const { selectedVilla } = useVilla();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-light text-slate-800">
        Reserva tu villa
      </h2>

      {selectedVilla ? (
        <div className="bg-slate-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold">{selectedVilla.name}</h3>
          <p>{selectedVilla.description}</p>
          <p className="text-slate-700">
            <strong>Precio:</strong> ${selectedVilla.price.toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-slate-500">
          No has seleccionado ninguna villa todavía.
        </p>
      )}

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="w-full border rounded-lg p-3"
        />
        <textarea
          placeholder="Mensaje o solicitud especial"
          className="w-full border rounded-lg p-3 h-32"
        />
        <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700">
          Enviar reserva
        </button>
      </form>
    </div>
  );
}
