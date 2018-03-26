/**
 * Logout
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { logOut } from 'containers/AuthProvider/redux/actions';

export class Logout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    logOut: PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.logOut();
  }
  render() {
    return (
      <div>
        Logging out..
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ logOut }, dispatch);
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Logout);
