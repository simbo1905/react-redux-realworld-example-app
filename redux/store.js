/**
 * Redux Store
 */

  import { createStore, applyMiddleware, combineReducers } from 'redux';
  import { composeWithDevTools } from 'redux-devtools-extension';
  import thunkMiddleware from 'redux-thunk';
  import { persistStore, persistReducer } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  //
  // export default () => {
  //   let store = createStore(persistedReducer)
  //   let persistor = persistStore(store)
  //   return { store, persistor }
  // }

    import { reducer as form } from 'redux-form';
    import user from './user/reducer';

    const reducers = combineReducers({
      user,
      form,
    });

    const persistConfig = {
      key: 'uniqkey',
      storage,
    }

  const persistedReducer = persistReducer(persistConfig, reducers)

    const initStore = (initialState = {}) => {
      const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
      const persistor = persistStore(store);
      return store;
    }

    export default initStore;

    // export default () => {
    // let store = createStore(persistedReducer)
    // let persistor = persistStore(store)
    // return { store, persistor }
    // }
