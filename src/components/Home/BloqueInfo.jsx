import React from "react";
import {
    ArrowRight,
    MapPin,
    Calendar,
    Award,
    CheckCircle2,
  } from "lucide-react";

export default function BloqueInfo() {
    const features = [
        { label: "Entrega", value: "Inmediata", icon: Calendar },
        { label: "Ubicación", value: "Privilegiada", icon: MapPin },
        { label: "Reserva con", value: "20%", icon: Award },
        { label: "Plan de Pago", value: "Flexible", icon: CheckCircle2 },
      ];


  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      <section className="bg-texture text-elegant-navy py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {features.map((item, i) => (
              <div key={i} className="space-y-2 sm:space-y-3">
                <item.icon
                  className="w-7 h-7 text-elegant-navy mx-auto"
                  strokeWidth={1.5}
                />
                <div className="text-xs sm:text-sm text-stone-600 font-bold tracking-wide">
                  {item.label}
                </div>
                <div className="text-xl sm:text-3xl font-light tracking-tight">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
