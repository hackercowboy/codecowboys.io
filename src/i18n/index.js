/* istanbul ignore file */
import flat from 'flat';

import en from './en';
import de from './de';

let lang = 'en';

if (typeof window !== 'undefined' && window && window.location && window.location.pathname) {
  if (window.location.pathname.indexOf('/de') === 0) {
    lang = 'de';
  }
}

const language = lang;
const messages = lang === 'de' ? flat(de) : flat(en);

export {
  language,
  messages,
};
