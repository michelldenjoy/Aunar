import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium border border-gold rounded-lg hover:bg-gold hover:text-white transition-colors"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
