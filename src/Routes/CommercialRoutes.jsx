import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryCommercial from "../components/Comercial/GalleryCommercial";
import MapCommercial from "../components/Comercial/MapCommercial";
import BookingCommercial from "../components/Comercial/BookingCommercial";

export default function CommercialRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="imagenes" replace />} />
      <Route path="imagenes" element={<GalleryCommercial />} />
      <Route path="plano" element={<MapCommercial />} />
      <Route path="reservar" element={<BookingCommercial />} />
    </Routes>
  );
}
