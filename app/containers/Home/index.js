/**
 * Home
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <h1>Welcome to UniqKey!</h1>
      </div>
    );
  }
}

const withConnect = connect(null, null);
export default compose(withConnect)(Home);
