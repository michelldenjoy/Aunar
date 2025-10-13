import { useTranslation } from "react-i18next";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} <span className="text-white">AUNAR</span>
          . Todos los derechos reservados.
        </p>
        <p className="text-sm">Punta Cana | Confianza y compromiso inmobiliario</p>
      </div>
    </footer>
  );
}
