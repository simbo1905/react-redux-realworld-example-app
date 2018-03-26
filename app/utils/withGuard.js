/**
 * withGuard
 *
 * A higher order component for checking for authenticated users
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthModel from 'models/Auth';
const Auth = new AuthModel();

export default function (ComposedComponent) {
  class Authentication extends Component {
      static contextTypes = {
        router: PropTypes.object,
      }

      componentWillMount() {
        this.redirectIfNotAuthenticated();
      }

      componentWillUpdate() {
        this.redirectIfNotAuthenticated();
      }

      /**
       * Check if user can access
       */
      userCanAccess = () => Auth.isAuthenticated() === true;

      /**
       * Redirect if user isn't authenticated
       */
      redirectIfNotAuthenticated = () => {
        if (!this.userCanAccess()) {
          this.context.router.history.push('/login');
        }
      }

      render() {
        if (this.userCanAccess()) {
          return <ComposedComponent {...this.props} />;
        }

        return null;
      }
  }

  const mapStateToProps = (state) => ({

  });

  return connect(mapStateToProps)(Authentication);
}
