import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/", label: t("navbar.home") },
    { path: "/villas", label: t("navbar.villas") },
    { path: "/double-villas", label: t("navbar.doubleVillas") },
    { path: "/apartments", label: t("navbar.apartments") },
    { path: "/commercial", label: t("navbar.commercial") },
    { path: "/map", label: t("navbar.map") },
    { path: "/about", label: t("navbar.about") },
    { path: "/contact", label: t("navbar.contact") },
  ];

  // Detecta scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100" 
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
      
        <Link
          to="/"
          className="relative group"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col items-start">
            <span className="text-2xl font-light tracking-[0.2em] text-slate-900 transition-colors">
              AUNAR
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-teal-600/60 font-medium -mt-1">
              Punta Cana
            </span>
            <span className="text-[12px] tracking-[0.3em] uppercase text-neutral-700 font-semibold text-center ml-4">
              Fase I
            </span>
          </div>
        </Link>

        {/*links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                    isActive
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
                {/* Underline elegante */}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-teal-600 transition-all duration-300 ${
                  ({ isActive }) => isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side: language & mobile toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile toggle */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
          >
            <span className={`w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu*/}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-500 ease-out ${
          open 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-white border-t border-slate-100`}
      >
        <div className="px-6 py-8 space-y-1">
          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  isActive
                    ? "text-teal-600 bg-teal-50/50 border-l-2 border-teal-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-2 border-transparent"
                } ${open ? "animate-fadeIn" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Divisor */}
          <div className="flex items-center gap-2 py-6">
            <div className="flex-1 h-[1px] bg-slate-200" />
            <div className="w-1 h-1 bg-teal-600/30 rounded-full" />
            <div className="flex-1 h-[1px] bg-slate-200" />
          </div>

          {/* Language switcher */}
          <div className="flex justify-center pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* CSS para animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}