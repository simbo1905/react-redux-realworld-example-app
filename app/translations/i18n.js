/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import daLocaleData from 'react-intl/locale-data/da';

import { DEFAULT_LOCALE } from 'containers/App/constants';

import enTranslationMessages from './en.json';
import daTranslationMessages from './da.json';

addLocaleData(enLocaleData);
addLocaleData(daLocaleData);

export const appLocales = [
  'en',
  'da',
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
};
