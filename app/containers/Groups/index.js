/**
 * Groups
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withGuard from 'utils/withGuard';

import injectSaga from 'utils/injectSaga';
import makeSelectGroups from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

export class Groups extends PureComponent { // eslint-disable-line react/prefer-stateless-function
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

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
});

const withConnect = connect(mapStateToProps);
const withSaga = injectSaga({ key: 'groups', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Groups);
