import React from "react";
import CommercialRoutes from "../Routes/CommercialRoutes";
import { CommercialProvider } from "../Context/CommercialContext";
import HeaderCommercial from "../components/Comercial/HeaderCommercial";

export default function CommercialPage() {
  return (
    <CommercialProvider>
      <div className="min-h-screen bg-white">
        <HeaderCommercial />
        <main className="max-w-6xl mx-auto px-6 py-10">
          <CommercialRoutes />
        </main>
      </div>
    </CommercialProvider>
  );
}
