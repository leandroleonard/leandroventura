import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';

const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',         
    interpolation: {
      escapeValue: false,      
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;