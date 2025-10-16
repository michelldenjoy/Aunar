import { useState } from "react";
import {
  Shield,
  Users,
  Home,
  Sparkles,
  CreditCard,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import marblefondo from "../../assets/fondosand1.jpg";

export default function FeatureHome() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: t("featureHome.features.trust.title"),
      description: t("featureHome.features.trust.description"),
      accent: "caribbean",
    },
    {
      icon: Users,
      title: t("featureHome.features.team.title"),
      description: t("featureHome.features.team.description"),
      accent: "coral",
    },
    {
      icon: Home,
      title: t("featureHome.features.facilities.title"),
      description: t("featureHome.features.facilities.description"),
      accent: "ocean",
    },
    {
      icon: Sparkles,
      title: t("featureHome.features.exclusive.title"),
      description: t("featureHome.features.exclusive.description"),
      accent: "sun",
    },
    {
      icon: CreditCard,
      title: t("featureHome.features.payments.title"),
      description: t("featureHome.features.payments.description"),
      accent: "palm",
    },
    {
      icon: Heart,
      title: t("featureHome.features.service.title"),
      description: t("featureHome.features.service.description"),
      accent: "coral",
    },
  ];

  const getAccentColors = (accent) => {
    const colors = {
      caribbean: {
        light: "bg-caribbean-50",
        medium: "bg-caribbean-400",
        dark: "text-caribbean-700",
        border: "border-caribbean-200",
        ring: "ring-caribbean-300/50",
      },
      coral: {
        light: "bg-coral-50",
        medium: "bg-coral-500",
        dark: "text-coral-700",
        border: "border-coral-200",
        ring: "ring-coral-300/50",
      },
      ocean: {
        light: "bg-ocean-50",
        medium: "bg-ocean-600",
        dark: "text-ocean-800",
        border: "border-ocean-200",
        ring: "ring-ocean-300/50",
      },
      sun: {
        light: "bg-sun-50",
        medium: "bg-sun-500",
        dark: "text-sun-700",
        border: "border-sun-200",
        ring: "ring-sun-300/50",
      },
      palm: {
        light: "bg-palm-50",
        medium: "bg-palm-500",
        dark: "text-palm-700",
        border: "border-palm-200",
        ring: "ring-palm-300/50",
      },
    };
    return colors[accent];
  };

  return (
    <section className="relative py-14 sm:py-16 md:py-20 bg-gradient-to-b from-sand-50 via-white to-sand-50 overflow-hidden">
      {/* Fondo marmolado */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{ backgroundImage: `url(${marblefondo})` }}
      />

      {/* Luces suaves de fondo */}
      <div className="absolute top-24 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-caribbean-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-coral-200/20 rounded-full blur-3xl" />

      {/* Contenedor principal */}
      <div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-2 bg-white border border-sand-300 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-caribbean-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-neutral-600">
                {t("featureHome.sectionLabel")}
              </span>
              <div
                className="w-2 h-2 rounded-full bg-coral-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-3 sm:mb-5 leading-tight">
            {t("featureHome.title")}
          </h2>

          <p className="text-xl sm:text-2xl md:text-4xl text-caribbean-700 font-light italic max-w-2xl mx-auto px-2">
            {t("featureHome.highlight")}
          </p>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
            <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-caribbean-400 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-caribbean-400" />
            <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-coral-400 to-transparent" />
          </div>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = getAccentColors(feature.accent);
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="group relative transition-transform duration-500 ease-out"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative h-full bg-white rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 ${
                    isHovered
                      ? `${colors.border} shadow-xl ring-4 ${colors.ring}`
                      : "border-sand-200 shadow-md"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${colors.light} ${
                      isHovered ? "opacity-30" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border-2 bg-white transition-all duration-300 mx-auto sm:mx-0">
                        <Icon
                          className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                            isHovered ? "text-white" : colors.dark
                          }`}
                          strokeWidth={1.8}
                        />
                        <div
                          className={`absolute inset-0 rounded-xl -z-10 transition-transform duration-300 ${
                            isHovered
                              ? `${colors.medium} scale-110`
                              : "scale-100 opacity-0"
                          }`}
                        />
                      </div>
                    </div>

                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-medium mb-2 text-center sm:text-left transition-colors duration-300 ${
                        isHovered ? colors.dark : "text-neutral-900"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light text-center sm:text-left">
                      {feature.description}
                    </p>

                    <div className="mt-5 flex items-center justify-center sm:justify-start gap-2">
                      <div
                        className={`h-0.5 rounded-full transition-all duration-500 ${
                          isHovered
                            ? `w-14 ${colors.medium}`
                            : "w-8 bg-sand-300"
                        }`}
                      />
                      {!isHovered && (
                        <>
                          <div className="w-0.5 h-0.5 rounded-full bg-sand-300" />
                          <div className="h-0.5 w-4 rounded-full bg-sand-300" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
