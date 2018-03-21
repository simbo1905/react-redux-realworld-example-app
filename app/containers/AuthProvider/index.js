/**
 *
 * AuthProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import makeSelectAuthProvider from './redux/selectors';
import saga from './redux/saga';

export class AuthProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { component, ...rest } = this.props;
    const Component = component;
    return (
      <Component
        {...rest}
      />
    );
  }
}

AuthProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  component: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuthProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withSaga,
  withConnect,
)(AuthProvider);
