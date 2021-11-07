import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import flat from 'flat';

import en from './en';
import de from './de';

let lang = 'en';

if (typeof window !== 'undefined' && window && window.location && window.location.pathname) {
  if (window.location.pathname.indexOf('/de') === 0) {
    lang = 'de';
  }
} else {

}

const language = lang;
const messages = lang === 'de' ? flat(de) : flat(en);

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

export {
  i18next,
  language,
  messages,
};
