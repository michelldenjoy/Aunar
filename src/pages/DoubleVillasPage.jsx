import React from "react";
import HeaderDoubleVilla from "../components/DoubleVillas/HeaderDoubleVilla";
import DoubleVillasRoutes from "../Routes/DoubleVillasRoutes";
import { DoubleVillaProvider } from "../Context/DoubleVillaContext";

export default function DoubleVillasPage() {
  const handleBack = () => (window.location.href = "/"); // volver al inicio

  return (
    <DoubleVillaProvider>
      <div className="min-h-screen bg-white">
        <HeaderDoubleVilla onBack={handleBack} />
        <main className="max-w-6xl mx-auto px-6 py-10">
          <DoubleVillasRoutes />
        </main>
      </div>
    </DoubleVillaProvider>
  );
}
