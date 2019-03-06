import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import de from './de';

let language = 'en';

if (typeof window !== 'undefined' && window && window.location && window.location.pathname) {
  if (window.location.pathname.indexOf('/de') === 0) {
    language = 'de';
  }
}

i18next
  .use(initReactI18next)
  .init({
    lng: language,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
  });

export default i18next;
