import React, { useRef, useState, useEffect } from "react";
import { useVilla } from "../../hooks/useVilla";
import ReCAPTCHA from "react-google-recaptcha";

export default function BookingVilla() {
  const { selectedVilla } = useVilla();
  const recaptchaRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Esto asegura que ReCAPTCHA solo se cargue en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!selectedVilla) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600">No has seleccionado ninguna villa.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaRef.current) return;

    try {
      // Ejecuta ReCAPTCHA invisible y obtiene el token
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset(); // resetea para futuros envíos

      console.log("Token ReCAPTCHA:", token);

      // Aquí enviarías los datos del formulario y el token a tu backend
      // fetch("/api/reservas", { method: "POST", body: JSON.stringify({ ...formData, token }) })
      alert("Formulario enviado con éxito (simulado)");

    } catch (err) {
      console.error("Error con ReCAPTCHA:", err);
      alert("Error al validar ReCAPTCHA");
    }
  };

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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            placeholder="tuemail@ejemplo.com"
            required
          />
        </div>

        <div>
          <label className="block text-slate-700 text-sm font-medium mb-1">
            Mensaje
          </label>
          <textarea
            name="message"
            className="w-full border border-slate-300 rounded-lg px-3 py-2"
            rows="4"
            placeholder="Consulta o solicitud adicional"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Enviar reserva
        </button>

        {/* ReCAPTCHA invisible */}
        {isClient && (
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            size="invisible"
            ref={recaptchaRef}
          />
        )}
      </form>
    </div>
  );
}
