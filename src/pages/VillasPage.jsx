// src/pages/VillasPage.jsx
import React from "react";
import HeaderVilla from "../components/Villas/HeaderVilla";
import VillasRoutes from "../components/Villas/VillasRoutes";

export default function VillasPage() {
  const handleBack = () => window.history.back();

  return (
    <div className="min-h-screen bg-white">
      <HeaderVilla onBack={handleBack} />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <VillasRoutes /> {/* 👈 Aquí se renderizan las subrutas internas */}
      </main>
    </div>
  );
}
