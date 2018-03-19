/**
 *
 * PageNotFound
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>PageNotFound</title>
        <meta name="description" content="Description of PageNotFound" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PageNotFound.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PageNotFound);
