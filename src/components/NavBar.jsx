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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden"; // 🔧 evitar scroll lateral
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden"; // mantener fijo
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    };
  }, [open]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`w-full fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between overflow-x-hidden">
        {/* Logo */}
        <Link
          to="/"
          className="relative group z-50 flex-shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col items-start">
            <span className="text-lg sm:text-xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-slate-900 transition-colors">
              AUNAR
            </span>
            <span className="text-[7px] sm:text-[9px] tracking-[0.25em] uppercase text-teal-600/60 font-medium -mt-0.5 sm:-mt-1">
              Punta Cana
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-[10px] xl:text-xs font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                    isActive
                      ? "text-teal-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] bg-teal-600 transition-all duration-300 w-0 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4 z-50">
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
            <span
              className={`w-5 sm:w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 sm:w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 sm:w-6 h-[1.5px] bg-slate-700 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Overlay móvil */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed left-0 top-[64px] w-full transition-all duration-500 ease-out z-50 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } bg-white shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto`}
      >
        <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-1">
          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={({ isActive }) =>
                `block px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg ${
                  isActive
                    ? "text-teal-600 bg-teal-50/50 border-l-2 border-teal-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-2 border-transparent"
                } ${open ? "animate-fadeIn" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-2 py-4 sm:py-6">
            <div className="flex-1 h-[1px] bg-slate-200" />
            <div className="w-1 h-1 bg-teal-600/30 rounded-full" />
            <div className="flex-1 h-[1px] bg-slate-200" />
          </div>

          <div className="flex justify-center pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Animación */}
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
