import React from 'react'

export default function InfoImg() {
  return (
    <div>
            <section className="relative h-[60vh] sm:h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <img
          src="/fotos/roomluxury.jpg"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />{" "}
      </section>

      {/* BLOQUE INFORMATIVO */}
      <section className="relative w-full bg-cover bg-center  text-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-elegant-navy"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-sand-100 mb-4">
            Apartamentos de 1 a 3 habitaciones | Áticos de 4 habitaciones
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-sun-300 mb-10">
            Desde 300 mil $
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-sand-100">
            <span className="font-light">Dormitorios espaciosos</span>
            <span className="hidden sm:block text-amber-300/30">|</span>
            <span className="font-light">Vistas Panoramicas</span>
            <span className="hidden sm:block text-amber-300/30">|</span>
            <span className="font-light">Cocinas a medida</span>
          </div>
        </div>
      </section>
    </div>
  )
}
