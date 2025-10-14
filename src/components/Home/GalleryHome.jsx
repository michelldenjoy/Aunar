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
    "Jardín Tropical",
    "Área Infantil",
    "Estudio de Yoga",
    "Gimnasio Premium",
    "Sauna y Spa",
    "Beach Club Privado",
    "Lobby Lounge",
    "Restaurante & Café",
    "Seguridad 24/7",
    "Sala de Juegos",
    "Estudio de Arte"
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
    <div className="bg-white">
      <section className="relative h-screen overflow-hidden"> {/*1* AQUI COMIENZA EL HERO SLIDER */}
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

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-5xl">
            <div className="mb-6 inline-block">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm tracking-widest">
                NUEVOS DESARROLLOS 2026
              </div>
            </div>
            {/* CAMBIA TITULO Y SUBTITULO */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 text-white/90">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* HIGHLIGHTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all"
                >
                  <item.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INDICADORES DEL SLIDE */}
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
      </section> {/* AQUI TERMINA EL HERO SLIDER */}

      

      {/*2* FEATURES */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {features.map((item, i) => (
              <div key={i} className="space-y-2">
                <item.icon className="w-6 h-6 text-cyan-400 mx-auto" />
                <div className="text-sm text-slate-400">{item.label}</div>
                <div className="text-2xl font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*3* DEFINICION CON FOTOS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6 tracking-wider">
                DONDE CADA DÍA SE SIENTE EXTRAORDINARIO
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
                Un Santuario Moderno en el Corazón del Paraíso
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Caribbean Luxury Residences fusiona el lujo con el estilo de vida, ofreciendo una vibrante comunidad residencial con diseños inteligentes, arquitectura elevada y amenidades tipo resort para quienes valoran el estilo, espacio y conectividad perfecta.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Rodeado de paisajes tropicales y posicionado a minutos de los destinos más icónicos, este desarrollo redefine lo que significa llegar a casa.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                  alt="Amenidad 1"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
                  alt="Amenidad 2"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/*4* LOCACION */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Donde Todo Está a Tu Alcance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ubicación privilegiada con acceso incomparable a las principales atracciones, centros de negocios y espacios de ocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-cyan-400">{loc.time}</div>
                  <div className="text-sm text-slate-300">{loc.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*5* AMENITIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6">
              Ocio Diario a Tu Puerta
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Te invitamos a relajarte, recargarte y reconectar a través de amenidades cuidadosamente seleccionadas. Desde zonas de bienestar hasta espacios creativos, diseñado para todos los gustos y edades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, i) => (
              <div
                key={i}
                className="group relative bg-slate-50 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 rounded-xl p-6 transition-all cursor-pointer border-2 border-transparent hover:border-cyan-200"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-600 mb-3" />
                <div className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {amenity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*6* FOTO CON DESCRIPCION DE DISENO */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Interior"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Minimalista. Moderno. Maravilloso.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Entra en espacios que celebran la elegancia sutil y el diseño de alta funcionalidad. Los interiores presentan distribuciones fluidas, acabados premium e iluminación natural, creando un santuario de calma y carácter.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Desde cocinas elegantes hasta baños refinados, cada elemento está cuidadosamente ubicado para máximo confort y sofisticación.
              </p>
              <ul className="space-y-4">
                {["Cocinas Europeas Premium", "Baños de Mármol Italiano", "Pisos de Madera Natural", "Domótica Inteligente"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/*7* FOOTER */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Tu Inversión en el Paraíso
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Espacios diseñados para inversores y residentes que buscan lo extraordinario
          </p>

        </div>
      </section>
    </div>
  );
}