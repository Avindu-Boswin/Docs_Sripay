import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations from JSON
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Integrate with React
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
