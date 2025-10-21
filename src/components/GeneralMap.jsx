import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ArrowLeft } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 18.4861,
  lng: -69.9312,
};

export default function MapPage() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  if (!visible) return null;

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-stone-900 relative min-h-screen">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm transition"
      >
        <ArrowLeft size={18} />
        <span>Inicio</span>
      </button>

      <h1 className="text-3xl font-light text-white mb-6">Ubicación</h1>

      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
