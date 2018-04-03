/**
 * Reports
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';

import injectSaga from 'utils/injectSaga';
import makeSelectReports from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

export class Reports extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Reports</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Reports.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectReports(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'reports', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Reports);
