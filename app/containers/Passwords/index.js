/**
 *
 * PagePasswords
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import makeSelectPasswords from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

export class PagePasswords extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Passwords</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PagePasswords.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  passwords: makeSelectPasswords(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'passwords', saga });

export default compose(
  withSaga,
  withConnect,
)(PagePasswords);
