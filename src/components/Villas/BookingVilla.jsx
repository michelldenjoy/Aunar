import React from "react";
import { useVilla } from "../../hooks/useVilla";

export default function BookingVilla() {
  const { selectedVilla } = useVilla();

  if (!selectedVilla) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600">No has seleccionado ninguna villa.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">
        Reserva {selectedVilla.name}
      </h2>

      <div className="space-y-2 mb-6">
        <p>
          <strong>Área:</strong> {selectedVilla.area}
        </p>
        <p>
          <strong>Precio:</strong> ${selectedVilla.price.toLocaleString()}
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="tuemail@ejemplo.com"
          />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Mensaje
          </label>
          <textarea
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            rows="4"
            placeholder="Consulta o solicitud adicional"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Enviar reserva
        </button>
      </form>
    </div>
  );
}
