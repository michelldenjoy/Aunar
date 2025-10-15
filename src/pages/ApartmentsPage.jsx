// src/pages/ApartmentsPage.jsx
import React from "react";
import HeaderApartment from "../components/Apartaments/HeaderApart";
import ApartmentsRoutes from "../Routes/ApartmentsRoutes";
import { ApartmentProvider } from "../context/ApartmentContext";

export default function ApartmentsPage() {
  return (
    <ApartmentProvider>
      <div className="min-h-screen bg-white">
        <HeaderApartment />
        <main className="max-w-6xl mx-auto px-6 py-10">
          <ApartmentsRoutes />
        </main>
      </div>
    </ApartmentProvider>
  );
}
