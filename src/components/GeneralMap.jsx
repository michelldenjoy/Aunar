import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { X } from "lucide-react"; // ícono del botón de cerrar (usa lucide-react)

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Coordenadas aproximadas del centro de República Dominicana (Santo Domingo)
const center = {
  lat: 18.4861,
  lng: -69.9312,
};

export default function MapPage() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // Si el usuario cierra, no se muestra nada

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-stone-900 relative">
      {/* Botón de cerrar */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition"
        aria-label="Cerrar mapa"
      >
        <X className="w-5 h-5" />
      </button>

      <h1 className="text-3xl font-light text-white mb-6">Ubicación</h1>

      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10} // Zoom ajustado para mostrar buena parte del país
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
