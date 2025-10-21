import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Calendar, Award, Home, Waves, Palmtree, Building2, Users, CheckCircle2, Sparkles, Shield, CreditCard, Heart } from "lucide-react";

export default function ElegantGalleryHome() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredAmenity, setHoveredAmenity] = useState(null);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=90",
      title: "Tu Santuario de Serenidad",
      subtitle: "Donde el Lujo se Encuentra con la Naturaleza"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90",
      title: "Espacios que Inspiran Vida",
      subtitle: "Diseñados para tu Bienestar y Éxito"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=90",
      title: "Un Refugio para Llamar Hogar",
      subtitle: "En Perfecta Armonía con el Caribe"
    }
  ];

  const highlights = [
    { icon: Waves, text: "Vistas panorámicas al mar" },
    { icon: Home, text: "Residencias y espacios de trabajo" },
    { icon: Award, text: "Ubicación exclusiva" },
    { icon: Building2, text: "Arquitectura contemporánea" }
  ];

  const features = [
    { label: "Entrega", value: "Inmediata", icon: Calendar },
    { label: "Ubicación", value: "Frente al Mar", icon: MapPin },
    { label: "Reserva con", value: "20%", icon: Award },
    { label: "Plan de Pago", value: "Flexible", icon: CheckCircle2 }
  ];

  const amenities = [
    { 
      name: "Piscina Infinity", 
      description: "Vista al océano infinito", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 15c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1 .6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1c.6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1"/><path d="M2 19c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1 .6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1c.6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1"/><path d="M20 16V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8"/></svg>
    },
    { 
      name: "Jardines Zen", 
      description: "Espacios de meditación", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
    },
    { 
      name: "Kids Club", 
      description: "Área de juegos temática", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    },
    { 
      name: "Yoga Pavilion", 
      description: "Estudio al aire libre", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="2"/><path d="M12 22s-4-4-4-9 4-7 4-7 4 2 4 7-4 9-4 9z"/><path d="M8 13h8"/></svg>
    },
    { 
      name: "Wellness Center", 
      description: "Gimnasio y spa premium", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    },
    { 
      name: "Sauna & Hammam", 
      description: "Experiencia termal", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20"/><path d="M8 5c0 2-2 3-2 5s2 3 2 5"/><path d="M12 5c0 2-2 3-2 5s2 3 2 5"/><path d="M16 5c0 2-2 3-2 5s2 3 2 5"/></svg>
    },
    { 
      name: "Beach Club", 
      description: "Acceso privado a playa", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    },
    { 
      name: "Sky Lounge", 
      description: "Terraza panorámica", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
    },
    { 
      name: "Gourmet Café", 
      description: "Gastronomía selecta", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
    },
    { 
      name: "Seguridad 24/7", 
      description: "Tranquilidad garantizada", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    { 
      name: "Game Room", 
      description: "Entretenimiento familiar", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M6 11h.01"/><path d="M10 11h.01"/><path d="M18 13v-2"/><path d="M17 12h2"/></svg>
    },
    { 
      name: "Pádel Courts", 
      description: "Canchas profesionales", 
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    }
  ];

  const locations = [
    { 
      time: "4 min", 
      place: "Playa Principal", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M22 10a3 3 0 0 0-3-3v.5"/></svg>
    },
    { 
      time: "10 min", 
      place: "Marina Internacional", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 21c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1 .6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1s1.4-.5 2-1c.6-.5 1.2-1 2-1s1.4.5 2 1c.6.5 1.2 1 2 1 .8 0 1.4-.5 2-1"/><path d="M10 4 8 8l-6 4 2 2 6-2 2 6h2l2-6 6 2 2-2-6-4-2-4z"/></svg>
    },
    { 
      time: "12 min", 
      place: "Centro Comercial", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
    },
    { 
      time: "15 min", 
      place: "Aeropuerto", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
    },
    { 
      time: "20 min", 
      place: "Campo de Golf", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="10" r="8"/><line x1="12" y1="2" x2="12" y2="10"/><path d="M8 22h8"/><path d="M12 18v4"/></svg>
    },
    { 
      time: "25 min", 
      place: "Distrito Financiero", 
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    }
  ];


  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105"
              style={{
                transform: index === currentSlide ? `scale(1)` : `scale(1.05)`,
                transition: "transform 8s ease-out"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/60" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white w-full max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[1.1] px-2 tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight mb-10 sm:mb-14 text-stone-100 px-2 tracking-wide">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 w-full px-2 max-w-4xl mx-auto">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-stone-50/5 backdrop-blur-md border border-stone-200/15 rounded-2xl p-4 hover:bg-stone-50/10 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-teal-400 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-left font-light">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? "w-16 bg-teal-400" : "w-8 bg-stone-300/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-texture text-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {features.map((item, i) => (
              <div key={i} className="space-y-2 sm:space-y-3">
                <item.icon className="w-7 h-7 text-teal-800 mx-auto" strokeWidth={1.5} />
                <div className="text-xs sm:text-sm text-stone-600 font-bold tracking-wide">{item.label}</div>
                <div className="text-xl sm:text-3xl font-light tracking-tight">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-neutral-50 text-teal-700 rounded-full text-xs sm:text-sm font-light mb-6 tracking-widest border border-neutral-200">
                TU HOGAR, TU SANTUARIO
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6 leading-tight tracking-tight">
                Donde la Vida Florece
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 font-light">
                Más que un desarrollo inmobiliario, creamos un ecosistema de vida integral. Espacios diseñados para que trabajes, vivas y disfrutes sin compromisos, rodeado de naturaleza y con todas las comodidades a tu alcance.
              </p>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                Cada rincón ha sido pensado para inspirar tranquilidad, fomentar conexiones auténticas y elevar tu día a día con detalles que marcan la diferencia.
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

      {/* Amenities Section - Inspirado en la referencia */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
              <Sparkles className="w-5 h-5 text-teal-500" strokeWidth={1.5} />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 mb-6 tracking-tight">
              Amenidades que Elevan tu Estilo de Vida
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Cada espacio ha sido concebido para nutrir tu bienestar, inspirar tu creatividad y enriquecer tu día a día
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setHoveredAmenity(i)}
                onMouseLeave={() => setHoveredAmenity(null)}
              >
                <div className={`relative h-full bg-gradient-to-br from-stone-50 to-stone-100 rounded-3xl p-6 sm:p-7 transition-all duration-500 border ${
                  hoveredAmenity === i 
                    ? "border-teal-300 shadow-2xl shadow-teal-100/50 -translate-y-2" 
                    : "border-stone-200 shadow-lg"
                }`}>
                  <div className="text-4xl mb-4">{amenity.icon}</div>
                  <h3 className="text-lg sm:text-xl font-light text-stone-900 mb-2 tracking-tight">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">
                    {amenity.description}
                  </p>
                  
                  <div className={`mt-5 h-0.5 rounded-full transition-all duration-500 ${
                    hoveredAmenity === i 
                      ? "w-full bg-gradient-to-r from-teal-400 to-teal-600" 
                      : "w-8 bg-stone-300"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-texture text-neutral-800 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Todo a Tu Alcance
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
              Conectividad perfecta con los destinos más importantes de la ciudad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-neutral-200 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-800 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sand-800 to-sand-500 flex items-center justify-center text-2xl shadow-lg shadow-black-500/20">
                    {loc.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-900 mb-1">{loc.time}</div>
                  <div className="text-sm text-teal-900 font-semibold">{loc.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Interior Design Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[450px] sm:h-[550px] md:h-[650px] order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Interior"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-full blur-3xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-stone-900 tracking-tight">
                Elegancia en Cada Detalle
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 font-light">
                Interiores que celebran la luz natural, la funcionalidad inteligente y la belleza atemporal. Cada espacio ha sido diseñado para ser un lienzo donde tu vida se despliega con gracia.
              </p>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 font-light">
                Desde cocinas gourmet hasta baños spa, cada elemento refleja nuestro compromiso con la excelencia y tu comodidad.
              </p>
              <ul className="space-y-4">
                {["Cocinas Europeas con Electrodomésticos Premium", "Baños en Mármol con Acabados de Lujo", "Pisos de Madera Natural Certificada", "Sistema de Domótica Integral"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" strokeWidth={2} />
                    </div>
                    <span className="text-sm sm:text-base text-stone-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 to-stone-800/75" />
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Tu Inversión en Bienestar
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-12 font-light leading-relaxed">
            Donde cada amanecer trae nuevas posibilidades y cada atardecer celebra una vida bien vivida
          </p>
        </div>
      </section>
    </div>
  );
}