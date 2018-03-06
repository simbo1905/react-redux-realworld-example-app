/**
 * withTranslations HoC
 *
 * This helper HoC injects translations into a given page
 */

import React from 'react';
import i18n from '@/config/i18n';
import { translate } from 'react-i18next';

export default (WrappedComponent, options) => {
  // Translations are specified in an array
  // to make sure that we only import the translations for this page
  const translations = options.translations || [];

  class Wrapper extends React.Component {
    // We need to extend getInitialProps to make sure translations works properly on page load
    static getInitialProps (context) {
      const initialProps = typeof WrappedComponent.getInitialProps === 'function' ? WrappedComponent.getInitialProps(context) : {};
      const translationProps = typeof i18n.getInitialProps === 'function' ? i18n.getInitialProps(context.req, translations) : {};
      return Object.assign(initialProps, translationProps);
    }
    constructor(props) {
      super(props);
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  // Wrap in translate() from react-i18next
  // to add the functions needed for translation such as t()
  return translate(translations, { i18n, wait: process.browser })(Wrapper);
}
