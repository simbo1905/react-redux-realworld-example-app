/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

/**
 * Import global sagas
 */

import formActionSaga from 'redux-form-saga';
import authSaga from 'containers/AuthProvider/redux/saga';
import profileSaga from 'containers/Profile/redux/saga';

const sagas = [
  formActionSaga,
  authSaga,
  profileSaga,
];

/**
 * Import global reducers
 */

import createReducer from './reducers'; // eslint-disable-line

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const persistConfig = {
  key: 'uniqkey',
  storage,
  blacklist: ['auth', 'app', 'organizations', 'groups'],
};

const persistedReducer = persistReducer(persistConfig, createReducer);

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    logger,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  // Run sagas
  sagas.forEach((saga) => {
    sagaMiddleware.run(saga);
  });

  store.runSaga = sagaMiddleware.run;
  store.injectedSagas = {}; // Saga registry

  // Injected reducers
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    // module.hot.accept('./reducers', () => {
    //   store.replaceReducer(createReducer(store.injectedReducers));
    // });
  }

  return {
    store,
    persistor,
  };
}
