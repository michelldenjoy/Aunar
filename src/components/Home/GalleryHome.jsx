import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Calendar, Award, Home, Waves, Palmtree, Building2, Users, CheckCircle2 } from "lucide-react";

export default function GalleryHome() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=90",
      title: "Tu Dirección de Lujo Moderno",
      subtitle: "y la Calma de la Naturaleza en el Caribe"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90",
      title: "Vistas al Mar desde Cada Residencia",
      subtitle: "Apartamentos y Villas con Diseño Vanguardista"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=90",
      title: "Un Refugio Frente al Mar",
      subtitle: "En el Corazón del Paraíso Caribeño"
    }
  ];

  const highlights = [
    { icon: Waves, text: "Vistas al mar desde todas las residencias" },
    { icon: Home, text: "Apartamentos y villas en planta baja" },
    { icon: Award, text: "A solo 5 min. de marinas exclusivas" },
    { icon: Building2, text: "Diseñado por arquitectos de renombre" }
  ];

  const features = [
    { label: "Entrega", value: "Inmediata", icon: Calendar },
    { label: "Ubicación", value: "Frente al Mar", icon: MapPin },
    { label: "Reserva con", value: "20%", icon: Award },
    { label: "Plan de Pago", value: "Flexible", icon: CheckCircle2 }
  ];

  const amenities = [
    "Piscina Infinita",
    "Areas Verdes",
    "Área Infantil",
    "Estudio de Yoga",
    "Gimnasio Premium",
    "Sauna y Spa",
    "Beach Club Privado",
    "Lobby Lounge",
    "Restaurante & Café",
    "Seguridad 24/7",
    "Sala de Juegos",
    "Pistas de Pádel"
  ];

  const locations = [
    { time: "4 min", place: "Playa Principal" },
    { time: "10 min", place: "Marina Internacional" },
    { time: "12 min", place: "Centro Comercial" },
    { time: "15 min", place: "Aeropuerto" },
    { time: "20 min", place: "Campo de Golf" },
    { time: "25 min", place: "Distrito Financiero" }
  ];

  return (
    <div className="bg-white overflow-x-hidden w-full">
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white w-full max-w-5xl">
            <div className="mb-4 sm:mb-6">
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm tracking-widest inline-block">
                NUEVOS DESARROLLOS 2026
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 leading-tight px-2">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 sm:mb-12 text-white/90 px-2">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 w-full px-2">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-left">{item.text}</span>
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
              className={`h-1 rounded-full transition-all ${
                index === currentSlide ? "w-12 bg-white" : "w-6 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {features.map((item, i) => (
              <div key={i} className="space-y-1 sm:space-y-2">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto" />
                <div className="text-xs sm:text-sm text-slate-400">{item.label}</div>
                <div className="text-lg sm:text-2xl font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-50 text-cyan-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 tracking-wider">
                DONDE CADA DÍA SE SIENTE EXTRAORDINARIO
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight">
                Un Santuario Moderno en el Corazón del Paraíso
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Aunar Luxury Residences fusiona el lujo con el estilo de vida, ofreciendo una vibrante comunidad residencial con diseños inteligentes, arquitectura elevada y amenidades tipo resort para quienes valoran el estilo, espacio y conectividad perfecta.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                Rodeado de paisajes tropicales y posicionado a minutos de los destinos más icónicos, este desarrollo redefine lo que significa llegar a casa.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                  alt="Amenidad 1"
                  className="rounded-xl sm:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
                  alt="Amenidad 2"
                  className="rounded-xl sm:rounded-2xl shadow-xl w-full h-48 sm:h-56 md:h-64 object-cover mt-4 sm:mt-8"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
              Donde Todo Está a Tu Alcance
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
              Ubicación privilegiada con acceso incomparable a las principales atracciones, centros de negocios y espacios de ocio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-cyan-400">{loc.time}</div>
                  <div className="text-xs sm:text-sm text-slate-300">{loc.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 sm:mb-6">
              Ventajas para nuestros socios
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
              Te invitamos a relajarte, recargarte y reconectar a través de amenidades cuidadosamente seleccionadas. Desde zonas de bienestar hasta espacios creativos, diseñado para todos los gustos y edades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className="group relative bg-slate-50 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-xl p-4 sm:p-6 transition-all cursor-pointer border-2 border-transparent hover:border-cyan-200"
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 mb-2 sm:mb-3" />
                <div className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {amenity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Interior"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6">
                Minimalista. Moderno. Maravilloso.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Entra en espacios que celebran la elegancia sutil y el diseño de alta funcionalidad. Los interiores presentan distribuciones fluidas, acabados premium e iluminación natural, creando un santuario de calma y carácter.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Desde cocinas elegantes hasta baños refinados, cada elemento está cuidadosamente ubicado para máximo confort y sofisticación.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {["Cocinas Europeas Premium", "Baños de Mármol Italiano", "Pisos de Madera Natural", "Domótica Inteligente"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 px-2">
            Tu Inversión en el Paraíso
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 px-2">
            Espacios diseñados para inversores y residentes que buscan lo extraordinario
          </p>
        </div>
      </section>
    </div>
  );
}