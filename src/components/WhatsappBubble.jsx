// src/components/common/WhatsAppBubble.jsx
import React from "react";
import { MessageCircleMore } from "lucide-react";

export default function WhatsAppBubble() {
  const phoneNumber = "34623380416"; // ☎️ 
  const message = "¡Hola! Estoy interesado en las propiedades de AUNAR."; // Mensaje predeterminado
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 bg-palm-600 hover:bg-palm-700 text-white rounded-full shadow-lg p-4 transition-transform duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircleMore className="w-6 h-6" />
    </a>
  );
}
