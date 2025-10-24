import { CheckCircle2 } from "lucide-react";

export default function GalleryHome() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [hoveredAmenity, setHoveredAmenity] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % 3);
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  // const heroSlides = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=90",
  //     title: "Tu Santuario de Serenidad",
  //     subtitle: "Donde el Lujo se Encuentra con la Naturaleza",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90",
  //     title: "Espacios que Inspiran Vida",
  //     subtitle: "Diseñados para tu Bienestar y Éxito",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=90",
  //     title: "Un Refugio para Llamar Hogar",
  //     subtitle: "En Perfecta Armonía con el Caribe",
  //   },
  // ];

  // const highlights = [
  //   { icon: Waves, text: "Vistas panorámicas al mar" },
  //   { icon: Home, text: "Residencias y espacios de trabajo" },
  //   { icon: Award, text: "Ubicación exclusiva" },
  //   { icon: Building2, text: "Arquitectura contemporánea" },
  // ];

  return (
    <div className="bg-stone-50 overflow-x-hidden w-full">
      {/* Hero Section */}
      {/* <section className="relative h-screen w-full overflow-hidden">
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
              className="w-full h-400 object-cover scale-105"
              style={{
                transform: index === currentSlide ? `scale(1)` : `scale(1.05)`,
                transition: "transform 8s ease-out",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/30 to-stone-900/60" />
          </div>
        ))} */}

      {/* <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white w-full max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[1.1] px-2 tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extralight mb-10 sm:mb-14 text-stone-100 px-2 tracking-wide">
              {heroSlides[currentSlide].subtitle}
            </p> */}

      {/* HIGHLIGHTS */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 w-full px-2 max-w-4xl mx-auto">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-stone-50/5 backdrop-blur-md border border-stone-200/15 rounded-2xl p-4 hover:bg-stone-50/10 transition-all duration-300"
                >
                  <item.icon
                    className="w-5 h-5 text-teal-400 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-left font-light">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-16 bg-teal-400"
                  : "w-8 bg-stone-300/50"
              }`}
            />
          ))}
        </div> */}
      {/* </section> */}

      {/* Location Section */}



      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 to-stone-800/75" />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Tu Inversión en Bienestar
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-12 font-light leading-relaxed">
            Donde cada amanecer trae nuevas posibilidades y cada atardecer
            celebra una vida bien vivida
          </p>
        </div>
      </section>
    </div>
  );
}
