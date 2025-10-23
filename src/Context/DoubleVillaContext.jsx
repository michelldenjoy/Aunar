import React, { createContext, useState } from "react";
import double1 from "../assets/villa1.jpg";
import double2 from "../assets/prettyhouse.jpg";

export const DoubleVillaContext = createContext();

export function DoubleVillaProvider({ children }) {
  const [selectedDoubleVilla, setSelectedDoubleVilla] = useState(null);
  const [doubleVillas] = useState([
    {
      id: 1,
      name: "Double Villa Coral",
      price: 410000,
      area: "230m²",
      description:
        "Dúplex moderno con dos niveles, amplias terrazas y piscina privada.",
      image: double1,
      coordinates: { x: 45, y: 60 },
      status: "available",
    },
    {
      id: 2,
      name: "Double Villa Garden",
      price: 465000,
      area: "250m²",
      description:
        "Villa doble con jardín tropical, en zona privilegiada con balcones y acabados de lujo.",
      image: double2,
      coordinates: { x: 65, y: 45 },
      status: "reserved",
    },
    {
      id: 3,
      name: "Double Villa Sunset",
      price: 545000,
      area: "300m²",
      description:
        "Villa doble con piscina infinita, jardin, diseño arquitectónico singular, materiales y acabados de alta gama.",
      image: double2,
      coordinates: { x: 20, y: 25 },
      status: "available",
    },
  ]);

  return (
    <DoubleVillaContext.Provider
      value={{ selectedDoubleVilla, setSelectedDoubleVilla, doubleVillas }}
    >
      {children}
    </DoubleVillaContext.Provider>
  );
}
