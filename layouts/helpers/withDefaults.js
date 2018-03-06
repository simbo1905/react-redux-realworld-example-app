/**
 * Higher Order Component for wrapping pages
 * with default functionality such as redux, translations etc.
 */

  import React, { Component } from 'react';

  // Translations
  import withTranslations from './withTranslations';

  // Redux
  import { bindActionCreators } from 'redux';
  import withRedux from 'next-redux-wrapper';
  import createStore from '@/redux/store';

  // Default options
  const defaultOptions = {
    mapDispatchToProps: null,
    mapStateToProps: null,
    guarded: true,
  };

  const withDefaults = (WrappedComponent, customOptions) => {
    const options = Object.assign(defaultOptions, customOptions);

    // class Wrapper extends Component {
    //   constructor(props) {
    //     super(props);
    //   }
    //
    //   render() {
    //     return (
    //       <WrappedComponent {...this.props} />
    //     );
    //   }
    // }

    // Wrap with translations
    const WithTranslations = withTranslations(WrappedComponent, options);

    // Wrap with redux
    const WithRedux = withRedux({
      createStore,
      mapStateToProps: options.mapStateToProps,
      mapDispatchToProps: options.mapDispatchToProps && typeof options.mapDispatchToProps === 'object' ? (dispatch) => bindActionCreators(options.mapDispatchToProps, dispatch) : null,
    })(WithTranslations);

    return WithRedux;
  }

  export default withDefaults;
