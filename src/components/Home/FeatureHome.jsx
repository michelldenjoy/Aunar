import { Shield, Users, Home, Sparkles, CreditCard, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FeatureHome() {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, title: t("featureHome.features.trust.title"), description: t("featureHome.features.trust.description") },
    { icon: Users, title: t("featureHome.features.team.title"), description: t("featureHome.features.team.description") },
    { icon: Home, title: t("featureHome.features.facilities.title"), description: t("featureHome.features.facilities.description") },
    { icon: Sparkles, title: t("featureHome.features.exclusive.title"), description: t("featureHome.features.exclusive.description") },
    { icon: CreditCard, title: t("featureHome.features.payments.title"), description: t("featureHome.features.payments.description") },
    { icon: Heart, title: t("featureHome.features.service.title"), description: t("featureHome.features.service.description") }
  ];

  return (
    <section className="py-10 md:py-10 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-14">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-teal-600/60 block mb-4 sm:mb-6">
            {t("featureHome.sectionLabel")}
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
            {t("featureHome.title")}
            <span className="block font-extralight italic text-teal-700 mt-2">
              {t("featureHome.highlight")}
            </span>
          </h2>

          <div className="w-10 sm:w-12 h-[1px] bg-teal-600/30 mx-auto mt-6 sm:mt-8" />
        </div>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div key={i} className="group text-center px-2">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-teal-50/50 rounded-full group-hover:scale-110 transition-transform duration-500" />
                <Icon className="w-5 h-5 text-teal-600/70 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2 sm:mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-24 text-center">
          <button className="group inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 border border-slate-200 text-slate-900 text-xs sm:text-sm font-medium tracking-wide hover:border-teal-600/30 hover:bg-teal-50/30 transition-all duration-500 rounded-full">
            <span>{t("featureHome.cta")}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
