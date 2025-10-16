import { useContext } from "react";
import { CommercialContext } from "../Context/CommercialContext";

export function useCommercial() {
  const ctx = useContext(CommercialContext);
  if (!ctx) throw new Error("useCommercial must be used within a CommercialProvider");
  return ctx;
}
