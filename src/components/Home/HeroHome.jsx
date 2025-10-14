import { ArrowRight } from "lucide-react";
import herovideo from "../../assets/herovideo.mp4";
import { useTranslation } from "react-i18next";

export default function HeroHome() {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-end h-[80vh] md:h-screen overflow-hidden bg-slate-900">
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-lg">
          <div className="mb-4 sm:mb-6">
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.3em] uppercase text-white/60 border-b border-white/20 pb-1">
              {t("heroHome.badge")}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-white mb-4 tracking-tight leading-[1.2]">
            {t("heroHome.titleLine1")} <br />
            <span className="font-extralight italic text-teal-200/90">
              {t("heroHome.titleHighlight")}
            </span>{" "}
            {t("heroHome.titleLine2")}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/70 mb-8 font-light leading-relaxed max-w-md">
            {t("heroHome.subtitle")}
          </p>

          {/* TRANSPARECIA CALIDAD COMPROMISO */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] text-white/40 font-light tracking-widest uppercase">
            <span>{t("heroHome.values.value1")}</span>
            <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
            <span>{t("heroHome.values.value2")}</span>
            <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
            <span>{t("heroHome.values.value3")}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[8px] sm:text-[9px] tracking-widest uppercase text-white/40 font-light rotate-90 origin-center mb-6 sm:mb-8">
            {t("heroHome.scroll")}
          </span>
          <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
