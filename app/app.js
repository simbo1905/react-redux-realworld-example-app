/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/createBrowserHistory';
import { PersistGate } from 'redux-persist/integration/react';

// Global styles
import 'styles/app.global.scss';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./static/favicon/favicon.ico';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-72x72.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-96x96.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-120x120.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-128x128.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-144x144.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-152x152.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-167x167.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-180x180.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-192x192.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-384x384.png';
import '!file-loader?name=[name].[ext]!./static/favicon/icon-512x512.png';
import '!file-loader?name=[name].[ext]!./static/favicon/manifest.json';
import 'file-loader?name=[name].[ext]!./static/.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable import/no-webpack-loader-syntax */

import configureStore from 'store/configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Observe loading of Lato (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const LatoObserver = new FontFaceObserver('Lato', {});

// When Lato is loaded, add a font-family using Lato to the body
LatoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
const initialState = {};
const history = createHistory();
const setupStore = configureStore(initialState, history);
const store = setupStore.store;
const persistor = setupStore.persistor;
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js'),
      import('intl/locale-data/jsonp/fr.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
