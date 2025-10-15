// src/context/ApartmentContext.jsx
import React, { createContext, useState } from "react";
import apartment1 from "../assets/apartment1.jpg";
import apartment2 from "../assets/apartment2.jpg";

export const ApartmentContext = createContext();

export function ApartmentProvider({ children }) {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const [apartments, setApartments] = useState([
    {
      id: 1,
      name: "Ocean View Apartment",
      price: 220000,
      area: "120m²",
      description: "Apartamento con vista panorámica al mar y terraza privada.",
      image: apartment1,
      status: "available",
      coordinates: { x: 35, y: 60 },
    },
    {
      id: 2,
      name: "City Garden Apartment",
      price: 198000,
      area: "100m²",
      description: "Espacioso apartamento rodeado de jardines y áreas comunes.",
      image: apartment2,
      status: "reserved",
      coordinates: { x: 55, y: 40 },
    },
    {
      id: 3,
      name: "Blue Sky Apartment",
      price: 168000,
      area: "90m²",
      description: "Espacioso apartamento con terraza y vistas al mar en excelente ubicación.",
      image: apartment2,
      status: "available",
      coordinates: { x: 10, y: 20 },
    },
  ]);

  return (
    <ApartmentContext.Provider
      value={{ apartments, selectedApartment, setSelectedApartment }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}
