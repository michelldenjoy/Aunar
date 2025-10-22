import React from 'react'

export default function TextIntro() {
  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      {/* DESCRIPCION */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-neutral-50 text-teal-700 rounded-full text-xs sm:text-sm font-light mb-6 tracking-widest border border-neutral-200">
                TU HOGAR, TU SANTUARIO
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6 leading-tight tracking-tight">
                Tu espacio seguro.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 font-light">
                Aunar Punta Cana es un refugio nacido del encuentro entre el mar
                y la selva tropical. Este complejo residencial celebra la
                armonía entre la arquitectura y la naturaleza, con materiales
                nobles y una conexión constante con la luz del Caribe. Cada
                espacio está diseñado para respirar calma, integrando el confort
                contemporáneo y respetando la esencia viva del entorno. Un lugar
                donde el lujo se expresa en silencio, y la vida fluye al ritmo
                del océano.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                  alt="Amenidad 1"
                  className="rounded-3xl shadow-2xl w-full h-56 md:h-72 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
                  alt="Amenidad 2"
                  className="rounded-3xl shadow-2xl w-full h-56 md:h-72 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
