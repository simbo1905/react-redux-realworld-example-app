/**
 * Higher Order Component for wrapping pages
 * with default functionality such as redux, translations etc.
 */

  import React, { Component } from 'react';
  import queryString from 'query-string';

  // Routing
  import Router from 'next/router';

  // Translations
  import i18n from '@/config/i18n';
  import { translate } from 'react-i18next';

  // Redux
  import { bindActionCreators } from 'redux';
  import withRedux from 'next-redux-wrapper';
  import createStore from '@/redux/store';

  // Authentication
  import Auth from '@/models/Auth';

  // Default options
  const defaultOptions = {
    mapDispatchToProps: null,
    mapStateToProps: null,
    guarded: true,
  };

  const withDefaults = (WrappedComponent, customOptions) => {
    const options = Object.assign(defaultOptions, customOptions);

    // Translations are specified in an array
    // to make sure that we only import the translations for this page
    const translations = options.translations || [];

    class Wrapper extends React.Component {

      // Extend getInitialProps and perform some initial actions
      static getInitialProps (context) {
        const { res, isServer, req } = context;

        /**
         * Set auth token if we are on server side
         */
         if (isServer) {
           const cookies = queryString.parse(req.headers.cookie);
           if (cookies.token) {
             Auth.setToken(cookies.token);
           }
         }

        /**
         * Check if user is authenticated
         */
        const isAuthenticated = Auth.getToken();

        /**
         * Check if current route is guarded by authentication
         * Redirect user if this is the case
         */

        // On server
        if (options.guarded && !isAuthenticated) {
          if (res && !isAuthenticated) {
            res.writeHead(302, {
              Location: '/login'
            });
            res.end()
            res.finished = true

          // On Client
          } else {
            Router.replace('/login');
          }
        }


        const initialProps = typeof WrappedComponent.getInitialProps === 'function' ? WrappedComponent.getInitialProps(context) : {};
        const translationProps = typeof i18n.getInitialProps === 'function' ? i18n.getInitialProps(context.req, translations) : {};
        return Object.assign(initialProps, translationProps);
      }

      constructor(props) {
        super(props);
      }

      render() {
        console.log('props!', this.props);
        return <WrappedComponent {...this.props} />
      }
    }

    // Wrap with redux
    const WithRedux = withRedux({
      createStore,
      mapStateToProps: options.mapStateToProps,
      mapDispatchToProps: options.mapDispatchToProps && typeof options.mapDispatchToProps === 'object' ? (dispatch) => bindActionCreators(options.mapDispatchToProps, dispatch) : null,
    })(Wrapper);

    return WithRedux;
  }

  export default withDefaults;
