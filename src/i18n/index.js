import i18next from 'i18next';
import en from './en';
import de from './de';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: de,
      },
    },
  });

export default i18next;
