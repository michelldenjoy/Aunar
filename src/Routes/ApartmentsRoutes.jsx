// src/Routes/ApartmentsRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryApartment from "../components/Apartaments/GalleryApartment";
import MapApart from "../components/Apartaments/MapApart";
import BookingApart from "../components/Apartaments/BookingApart";

export default function ApartmentsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="imagenes" replace />} />
      <Route path="imagenes" element={<GalleryApartment />} />
      <Route path="plano" element={<MapApart />} />
      <Route path="reservar" element={<BookingApart />} />
    </Routes>
  );
}
