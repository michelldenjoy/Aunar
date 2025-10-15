import React, { createContext, useState } from "react";
import villa2 from "../assets/Villa2.jpg";
import villa3 from "../assets/Villa3.jpg";
import villa4 from "../assets/Villa4.jpg";
export const VillaContext = createContext();

export function VillaProvider({ children }) {
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [villas, setVillas] = useState([
    {
      id: 1,
      name: "Villa Sunset",
      price: 350000,
      area: "180m²",
      description: "Villa moderna con piscina y vistas al mar.",
      image: villa2,
      coordinates: { x: 40, y: 60 },
      status: "available",
    },
    {
      id: 2,
      name: "Villa Palm",
      price: 420000,
      area: "210m²",
      description: "Villa rodeada de palmeras y tranquilidad.",
      image: villa3,
      coordinates: { x: 60, y: 40 },
      status: "reserved",
    },
    {
      id: 3,
      name: "Villa Spring",
      price: 520000,
      area: "210m²",
      description: "Villa con piscina y vistas al mar.",
      image: villa4,
      coordinates: { x: 20, y: 40 },
      status: "available",
    },
  ]);

  return (
    <VillaContext.Provider value={{ selectedVilla, setSelectedVilla, villas }}>
      {children}
    </VillaContext.Provider>
  );
}
