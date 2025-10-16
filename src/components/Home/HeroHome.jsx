import { ArrowRight } from "lucide-react";
import herovideo from "../../assets/herovideo.mp4";
import { useTranslation } from "react-i18next";

export default function HeroHome() {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-end h-[90vh] sm:h-[95vh] md:h-screen overflow-hidden bg-slate-900">
      {/* VIDEO DE FONDO */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY SUTIL */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-12 pb-20 sm:pb-24 md:pb-28">
        <div className="max-w-[95%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-left">
          {/* BADGE */}
          <div className="mb-4 sm:mb-6">
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/60 border-b border-white/20 pb-1">
              {t("heroHome.badge")}
            </span>
          </div>

          {/* TÍTULO */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-[1.2] break-words">
            {t("heroHome.titleLine1")} <br />
            <span className="font-extralight italic text-teal-200/90">
              {t("heroHome.titleHighlight")}
            </span>{" "}
            {t("heroHome.titleLine2")}
          </h1>

          {/* SUBTÍTULO */}
          <p className="text-[11px] xs:text-[12px] sm:text-sm md:text-base text-white/70 mb-6 sm:mb-8 font-light leading-relaxed max-w-[90%] sm:max-w-md md:max-w-lg">
            {t("heroHome.subtitle")}
          </p>

          {/* VALORES */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-4 text-[8px] xs:text-[9px] sm:text-[10px] text-white/50 font-light tracking-widest uppercase">
            <span>{t("heroHome.values.value1")}</span>
            <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
            <span>{t("heroHome.values.value2")}</span>
            <span className="w-0.5 h-0.5 bg-white/30 rounded-full" />
            <span>{t("heroHome.values.value3")}</span>
          </div>
        </div>
      </div>

      {/* INDICADOR SCROLL */}
      <div className="absolute bottom-4 sm:bottom-6 right-3 xs:right-4 sm:right-8 flex flex-col items-center gap-2 sm:gap-3">
        <span className="text-[7px] xs:text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/40 font-light rotate-90 mb-5 sm:mb-6">
          {t("heroHome.scroll")}
        </span>
        <div className="w-[1px] h-10 sm:h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
