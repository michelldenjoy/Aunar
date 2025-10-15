// src/hooks/useApartment.js
import { useContext } from "react";
import { ApartmentContext } from "../context/ApartmentContext";

export function useApartment() {
  const ctx = useContext(ApartmentContext);
  if (!ctx) throw new Error("useApartment must be used within an ApartmentProvider");
  return ctx;
}
