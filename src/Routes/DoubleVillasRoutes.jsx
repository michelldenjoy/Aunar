import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryDoubleVilla from "../components/DoubleVillas/GalleryDoubleVilla";
import MapDoubleVilla from "../components/DoubleVillas/MapDoubleVilla";
import BookingDoubleVilla from "../components/DoubleVillas/BookingDoubleVilla";

export default function DoubleVillasRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="imagenes" replace />} />
      <Route path="imagenes" element={<GalleryDoubleVilla />} />
      <Route path="plano" element={<MapDoubleVilla />} />
      <Route path="reservar" element={<BookingDoubleVilla />} />
    </Routes>
  );
}
