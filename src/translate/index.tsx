import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  // .use(LanguageDetector) need i18next-browser-languagedetector library
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          friend: 'Friend',
        },
      },
      ukr: {
        translations: {
          friend: 'Товариш',
        },
      },
    },
    fallbackLng: 'en',
    debug: false,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
