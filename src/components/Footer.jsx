import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-elegant-navy text-sand-200 pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">

        {/* 🔹 Columna 1: Marca */}
        <div>
          <h3 className="text-2xl font-semibold caribbean-500 tracking-wide mb-3">
            AUNAR
          </h3>
          <p className="text-sand-300 text-sm leading-relaxed">
            Complejo residencial y comercial pensado para elevar tu estilo de vida en Punta Cana.
          </p>
        </div>

        {/* 🔹 Columna 2: Navegación rápida */}
        <div>
          <h4 className="text-lg font-semibold caribbean-500 mb-3">Explorar</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/villas" className="hover:text-caribbean-500 transition">Villas</a>
            </li>
            <li>
              <a href="/double-villas" className="hover:text-caribbean-500 transition">Villas Dobles</a>
            </li>
            <li>
              <a href="/apartments" className="hover:text-caribbean-500 transition">Apartamentos</a>
            </li>
            <li>
              <a href="/commercial" className="hover:text-caribbean-500 transition">Locales</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-caribbean-500 transition">Contacto</a>
            </li>
          </ul>
        </div>

        {/* 🔹 Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-sand-300" />
              <span>+34 600 123 456</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-sand-300" />
              <span>contacto@aunar.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-sand-300" />
              <span>Punta Cana, República Dominicana</span>
            </li>
          </ul>
        </div>

        {/* 🔹 Columna 4: Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold caribbean-500 mb-3">Síguenos</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Facebook size={18} className="caribbean-500" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Instagram size={18} className="caribbean-500" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Youtube size={18} className="caribbean-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-14 border-t border-white/10 pt-6 text-center text-sand-300 text-sm">
        © {new Date().getFullYear()} <span className="caribbean-500">AUNAR</span>.  
        Todos los derechos reservados.
      </div>
    </footer>
  );
}
