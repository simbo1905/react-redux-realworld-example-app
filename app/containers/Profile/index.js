/**
 * Profile
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import withGuard from 'utils/withGuard';

import injectSaga from 'utils/injectSaga';
import makeSelectProfile from './redux/selectors';
import { fetchProfile } from './redux/actions';
import saga from './redux/saga';
import messages from './messages';

export class Profile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    fetchProfile: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProfile,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'profile', saga });

export default compose(
  withSaga,
  withConnect,
  withGuard,
)(Profile);
