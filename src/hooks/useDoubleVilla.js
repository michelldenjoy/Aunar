import { useContext } from "react";
import { DoubleVillaContext } from "../Context/DoubleVillaContext";

export function useDoubleVilla() {
  const ctx = useContext(DoubleVillaContext);
  if (!ctx) throw new Error("useDoubleVilla must be used within a DoubleVillaProvider");
  return ctx;
}
