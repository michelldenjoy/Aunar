import { useTranslation } from "react-i18next";
import beachcoast from "../../assets/beachcoast.jpg";
import beachpool from "../../assets/beachpool.jpg";
import modernvilla from "../../assets/prettyhouse.jpg";

export default function GalleryHome() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        {/* 🏝️ Sección 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={beachcoast}
              alt={t("galleryHome.section1.alt")}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900">
              {t("galleryHome.section1.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("galleryHome.section1.text")}
            </p>
            <button className="mt-4 inline-block px-6 py-3 border border-slate-300 rounded-full text-sm text-slate-800 hover:bg-teal-50 hover:border-teal-400 transition">
              {t("galleryHome.section1.button")}
            </button>
          </div>
        </div>

        {/* 🏊 Sección 2 (imagen a la derecha) */}
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900">
              {t("galleryHome.section2.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("galleryHome.section2.text")}
            </p>
            <button className="mt-4 inline-block px-6 py-3 border border-slate-300 rounded-full text-sm text-slate-800 hover:bg-teal-50 hover:border-teal-400 transition">
              {t("galleryHome.section2.button")}
            </button>
          </div>

          <div className="order-1 md:order-2 overflow-hidden rounded-3xl shadow-lg">
            <img
              src={beachpool}
              alt={t("galleryHome.section2.alt")}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* 🏠 Sección 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={modernvilla}
              alt={t("galleryHome.section3.alt")}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900">
              {t("galleryHome.section3.title")}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t("galleryHome.section3.text")}
            </p>
            <button className="mt-4 inline-block px-6 py-3 border border-slate-300 rounded-full text-sm text-slate-800 hover:bg-teal-50 hover:border-teal-400 transition">
              {t("galleryHome.section3.button")}
            </button>
          </div>
        </div>
      </div>
      {/* 🏖️ Imagen grande final */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="overflow-hidden rounded-3xl shadow-lg h-[500px]">
          <img
            src={beachcoast}
            alt={t("galleryHome.section1.alt")}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      
    </section>
  );
}
