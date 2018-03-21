/**
 *
 * Groups
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
import makeSelectGroups from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

export class Groups extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Groups</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Groups.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'groups', saga });

export default compose(
  withSaga,
  withConnect,
)(Groups);
