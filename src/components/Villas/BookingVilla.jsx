import React, { useRef, useState, useEffect } from "react";
import { useVilla } from "../../hooks/useVilla";
import ReCAPTCHA from "react-google-recaptcha";

export default function BookingVilla() {
  const { selectedVilla } = useVilla();
  const recaptchaRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [success, setSuccess] = useState(false); 

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue(); 
    if (!token) {
      alert("Por favor verifica que no eres un robot.");
      return;
    }

    recaptchaRef.current.reset(); 
    console.log("Token ReCAPTCHA v2:", token);


    setSuccess(true);
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

        
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Enviar reserva
        </button>

        
        {success && (
          <p className="mt-4 text-green-600 font-medium text-center">
            ¡Tu reserva ha sido enviada con éxito!
          </p>
        )}

        
        {isClient && (
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            ref={recaptchaRef}
            onChange={(token) => {
              console.log("Token ReCAPTCHA v2:", token);
            }}
          />
        )}
      </form>
    </div>
  );
}
