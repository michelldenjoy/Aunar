import { useState } from "react";
import {
  Shield,
  Users,
  Home,
  Sparkles,
  CreditCard,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FeatureHome() {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: Shield,
      title: t("featureHome.features.trust.title"),
      description: t("featureHome.features.trust.description"),
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan",
    },
    {
      icon: Users,
      title: t("featureHome.features.team.title"),
      description: t("featureHome.features.team.description"),
      gradient: "from-teal-500 to-cyan-600",
      color: "teal",
    },
    {
      icon: Home,
      title: t("featureHome.features.facilities.title"),
      description: t("featureHome.features.facilities.description"),
      gradient: "from-blue-500 to-indigo-600",
      color: "blue",
    },
    {
      icon: Sparkles,
      title: t("featureHome.features.exclusive.title"),
      description: t("featureHome.features.exclusive.description"),
      gradient: "from-purple-500 to-pink-600",
      color: "purple",
    },
    {
      icon: CreditCard,
      title: t("featureHome.features.payments.title"),
      description: t("featureHome.features.payments.description"),
      gradient: "from-emerald-500 to-teal-600",
      color: "emerald",
    },
    {
      icon: Heart,
      title: t("featureHome.features.service.title"),
      description: t("featureHome.features.service.description"),
      gradient: "from-rose-500 to-pink-600",
      color: "rose",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-blue-400/30 rounded-full animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-700">
              {t("featureHome.sectionLabel")}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight leading-tight">
            {t("featureHome.title")}
            <span className="block mt-3 font-normal bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("featureHome.highlight")}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-transparent overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}
                  >
                    <div className="h-full w-full bg-white rounded-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div
                        className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        <Icon
                          className="w-7 h-7 text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Floating Badge */}
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center`}
                      >
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                      style={{
                        backgroundImage:
                          activeFeature === i
                            ? `linear-gradient(to right, var(--tw-gradient-stops))`
                            : "none",
                        "--tw-gradient-from":
                          feature.color === "cyan"
                            ? "#06b6d4"
                            : feature.color === "teal"
                            ? "#14b8a6"
                            : feature.color === "blue"
                            ? "#3b82f6"
                            : feature.color === "purple"
                            ? "#a855f7"
                            : feature.color === "emerald"
                            ? "#10b981"
                            : "#f43f5e",
                        "--tw-gradient-to":
                          feature.color === "cyan"
                            ? "#2563eb"
                            : feature.color === "teal"
                            ? "#06b6d4"
                            : feature.color === "blue"
                            ? "#6366f1"
                            : feature.color === "purple"
                            ? "#ec4899"
                            : feature.color === "emerald"
                            ? "#14b8a6"
                            : "#ec4899",
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed font-light text-base">
                      {feature.description}
                    </p>

                    {/* Progress Bar Animation */}
                    <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                      />
                    </div>
                  </div>

                  {/* Corner Decoration */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700`}
                  />
                </div>

                {/* Floating Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-24 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full blur-2xl opacity-20" />
            <div className="relative flex items-center gap-2 px-8 py-3 bg-white rounded-full border-2 border-slate-100 shadow-lg">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${features[i].gradient} border-2 border-white`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-700 ml-2">
                Más de 500 familias confían en nosotros
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
