/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import daLocaleData from 'react-intl/locale-data/da';
import frLocaleData from 'react-intl/locale-data/fr';

import { DEFAULT_LOCALE } from './config/i18n';

import enTranslationMessages from './translations/en.json';
import daTranslationMessages from './translations/da.json';
import frTranslationMessages from './translations/fr.json';

addLocaleData(enLocaleData);
addLocaleData(daLocaleData);
addLocaleData(frLocaleData);

export const appLocales = [
  'en',
  'da',
  'fr',
];

export const formatTranslationMessages = (locale, messages) => {
  const dafaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? dafaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  da: formatTranslationMessages('da', daTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
};
