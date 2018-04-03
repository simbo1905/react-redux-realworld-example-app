/**
 * Login
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import AuthProvider from 'containers/AuthProvider';
import SigninForm from './components/SigninForm';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div style={{ margin: 'auto', width: '300px' }}>
          <SigninForm />
        </div>
      </div>
    );
  }
}

export default (props) => <AuthProvider component={Login} {...props} />;
