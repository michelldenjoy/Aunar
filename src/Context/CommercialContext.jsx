import React, { createContext, useState } from "react";
import local1 from "../assets/local1.jpg";
import local2 from "../assets/local2.jpg";

export const CommercialContext = createContext();

export function CommercialProvider({ children }) {
  const [selectedCommercial, setSelectedCommercial] = useState(null);
  const [commercials] = useState([
    {
      id: 1,
      name: "Local Costa Market",
      price: 175000,
      area: "95m²",
      description: "Espacio comercial ideal para restaurante o boutique, con terraza exterior.",
      image: local1,
      status: "available",
      coordinates: { x: 45, y: 50 },
    },
    {
      id: 2,
      name: "Centro Aunar Plaza",
      price: 250000,
      area: "130m²",
      description: "Local comercial con doble altura, ubicado en la zona más concurrida del complejo.",
      image: local2,
      status: "reserved",
      coordinates: { x: 65, y: 40 },
    },
  ]);

  return (
    <CommercialContext.Provider
      value={{ commercials, selectedCommercial, setSelectedCommercial }}
    >
      {children}
    </CommercialContext.Provider>
  );
}
