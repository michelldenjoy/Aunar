import { useState } from "react";
import { Shield, Users, Home, Sparkles, CreditCard, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-sand-50 via-white to-sand-50">
      {/* Textura de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Dos Puntos parpadean sutilmente */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-caribbean-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-coral-200/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header más personal y cálido */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-5 py-2 bg-white border border-sand-300 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-caribbean-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-neutral-600">
                {t("featureHome.sectionLabel")}
              </span>
              <div
                className="w-2 h-2 rounded-full bg-coral-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-5 leading-tight">
            {t("featureHome.title")}
          </h2>

          <p className="text-lg md:text-xl text-caribbean-700 font-light italic max-w-2xl mx-auto">
            {t("featureHome.highlight")}
          </p>

          {/* Línea decorativa orgánica */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-caribbean-400 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-caribbean-400" />
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-coral-400 to-transparent" />
          </div>
        </div>

        {/* Grid de características con diseño asimétrico y orgánico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = getAccentColors(feature.accent);
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: i % 2 === 0 ? "translateY(0)" : "translateY(1rem)",
                }}
              >
                {/* Tarjeta con diseño más natural */}
                <div
                  className={`
                  relative h-full bg-white rounded-2xl p-7 
                  border-2 transition-all duration-300
                  ${
                    isHovered
                      ? colors.border + " shadow-xl ring-4 " + colors.ring
                      : "border-sand-200 shadow-md"
                  }
                `}
                >
                  {/* Sutil gradiente de fondo */}
                  <div
                    className={`
                    absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                    ${colors.light}
                    ${isHovered ? "opacity-30" : "opacity-0"}
                  `}
                  />

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* ESTILO DE ICONOS */}
                    <div className="mb-6 relative inline-block">
                      <div
                        className={`
                        absolute inset-0 rounded-xl blur-lg opacity-30 transition-all duration-300
                        ${colors.medium}
                        ${isHovered ? "scale-110" : "scale-100"}
                      `}
                      />
                      <div
                        className={`
                        relative w-14 h-14 rounded-xl flex items-center justify-center
                        border-2 transition-all duration-300
                        ${
                          isHovered
                            ? colors.medium + " border-transparent shadow-lg"
                            : "bg-white " + colors.border
                        }
                      `}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isHovered ? "text-white" : colors.dark
                          }`}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    {/* Título con tipografía más personal */}
                    <h3
                      className={`
                      text-xl md:text-2xl font-medium mb-3 transition-colors duration-300
                      ${isHovered ? colors.dark : "text-neutral-900"}
                    `}
                    >
                      {feature.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-base text-neutral-600 leading-relaxed font-light">
                      {feature.description}
                    </p>

                    {/* Línea decorativa inferior */}
                    <div className="mt-6 flex items-center gap-2">
                      <div
                        className={`
                        h-0.5 transition-all duration-500 rounded-full
                        ${
                          isHovered
                            ? "w-full " + colors.medium
                            : "w-8 bg-sand-300"
                        }
                      `}
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
