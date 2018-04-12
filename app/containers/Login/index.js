/**
 * Login
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AuthProvider from 'containers/AuthProvider';
import SigninForm from './components/SigninForm';


class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // fixme: temprorary
    this.props.history.push('/qrauth');
  }
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div style={{ margin: 'auto', width: '300px' }}>
          <SigninForm />
          <Link to="/qrauth" href="/qrauth" >QR auth</Link>
        </div>
      </div>
    );
  }
}

export default (props) => <AuthProvider component={Login} {...props} />;
