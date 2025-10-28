import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function EleganceSection() {
  const features = [
    {
      text: "Vestíbulo de bienvenida con entrada de doble altura y diseño orgánico que refleja la esencia natural del proyecto.",
      image: "amenities/vestibulo.jpg"
    },
    {
      text: "Gimnasios interiores y al aire libre, ideales para entrenar en conexión con el entorno.",
      image: "amenities/gym.jpg"
    },
    {
      text: "Piscinas estilo bosque, rodeadas de vegetación tropical y terrazas relajantes.",
      image: "amenities/infinity.jpg"
    },
    {
      text: "Zonas familiares y áreas de juego para niños, tanto interiores como exteriores.",
      image: "amenities/nigthpool.jpg"
    },
    {
      text: "Terrazas para barbacoa y áreas verdes perfectas para eventos, reuniones o tardes entre amigos.",
      image: "amenities/terrace.jpg"
    },
    {
      text: "Santuarios de bienestar y espacios al aire libre, pensados para la meditación, el yoga y la calma interior.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
    }
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // rota cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % features.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // touch swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left 
      setActiveImage((prev) => (prev + 1) % features.length);
    }
    if (touchStart - touchEnd < -50) {
      // swipe right
      setActiveImage((prev) => (prev - 1 + features.length) % features.length);
    }
  };

  const handleFeatureClick = (index) => {
    setActiveImage(index);
  };

  return (
    <section className="overflow-x-hidden w-full px-5 py-8 text-justify ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* galeria */}
          <div 
            className="relative h-[500px] sm:h-[600px] md:h-[700px] order-2 md:order-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <img
                key={index}
                src={feature.image}
                alt={`Amenidad ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ${
                  activeImage === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Subtle shadow overlay */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl pointer-events-none" />
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-amber-400/10 rounded-full blur-2xl" />
            
            {/* swipe movil */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
              <p className="text-xs text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                Desliza para ver más
              </p>
            </div>
          </div>

          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl  font-light mb-8 text-stone-900 tracking-tight leading-tight">
              Elegancia en<br />Cada Detalle
            </h2>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-6 font-light">
              Sumérgete en un entorno donde la naturaleza, el bienestar y el diseño contemporáneo se entrelazan para crear un estilo de vida único. En Aunar, cada espacio está concebido para reconectar cuerpo, mente y espíritu.
            </p>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-10 font-light">
              Desde cocinas gourmet hasta baños spa, cada elemento refleja nuestro compromiso con la excelencia y tu comodidad.
            </p>

            {/* Features*/}
            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li 
                  key={i}
                  onClick={() => handleFeatureClick(i)}
                  onMouseEnter={() => handleFeatureClick(i)}
                  className={`flex items-start gap-4 cursor-pointer group transition-all duration-300 ${
                    activeImage === i ? 'scale-[1.02]' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 transition-colors duration-300 ${
                    activeImage === i 
                      ? 'bg-stone-900' 
                      : 'bg-stone-200 group-hover:bg-stone-900'
                  }`}>
                    <CheckCircle2
                      className={`w-4 h-4 transition-colors duration-300 ${
                        activeImage === i 
                          ? 'text-white' 
                          : 'text-stone-600 group-hover:text-white'
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <span className={`text-base font-light leading-relaxed transition-colors duration-300 ${
                    activeImage === i 
                      ? 'text-stone-900 font-normal' 
                      : 'text-stone-700 group-hover:text-stone-900'
                  }`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* indicadores */}
            <div className="flex gap-2 mt-10">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeImage === i 
                      ? 'w-12 bg-stone-900' 
                      : 'w-8 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ver imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}