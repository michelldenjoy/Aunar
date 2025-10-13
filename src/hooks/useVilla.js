import { useContext } from "react";
import { VillaContext } from "../Context/VillaContext";

export function useVilla() {
  const ctx = useContext(VillaContext);
  if (!ctx) throw new Error("useVilla must be used within a VillaProvider");
  return ctx;
}
