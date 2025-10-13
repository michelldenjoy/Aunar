// src/components/Villas/VillasRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryVilla from "../components/Villas/GalleryVilla";
import MapVilla from "../components/Villas/MapVilla";
import BookingVilla from "../components/Villas/BookingVilla";

export default function VillasRoutes() {
  return (
    <Routes>
      {/* Redirige /villas a /villas/imagenes */}
      <Route path="/" element={<Navigate to="imagenes" replace />} />
      <Route path="imagenes" element={<GalleryVilla />} />
      <Route path="plano" element={<MapVilla />} />
      <Route path="reservar" element={<BookingVilla />} />
    </Routes>
  );
}
