import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en/translation.json';
import miTranslation from './mi/translation.json';
import myTranslation from './my/translation.json';
import zhTranslation from './zh/translation.json';
import thTranslation from './th/translation.json';

const languageDetectorOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
  cookieMinutes: 10080, // 7 days
  htmlTag: document.documentElement,
  checkWhitelist: true
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      mi: { translation: miTranslation },
      my: { translation: myTranslation },
      zh: { translation: zhTranslation },
      th: { translation: thTranslation }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'mi', 'my', 'zh', 'th'],
    detection: languageDetectorOptions,
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;