/**
 *
 * Qrauth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import makeSelectQrauth from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

import { CHECK_QR_TOKEN } from './redux/constants';

const QRCode = require('qrcode.react');
const uuidv1 = require('uuid/v1');


export class Qrauth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.guid = uuidv1();
    const intervalId = setInterval(() => {
      this.checkQRLogin();
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  guid = null;

  checkQRLogin() {
    try {
      this.props.dispatch({ type: CHECK_QR_TOKEN, payload: { guid: this.guid } });
    } catch (error) {
      console.log('Error getting QR status', error);
    }
  }
  render() {
    const qrdata = {
      type: 'web',
      guid: this.guid,
      publicKey: 'this-is-public-key',
    };
    return (
      <div>
        <div style={{ margin: 'auto', width: '300px' }}>
          <QRCode value={JSON.stringify(qrdata)} size="300" />
          <div>{JSON.stringify(qrdata)}</div>
        </div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Qrauth.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  groups: makeSelectQrauth(),
});

const withConnect = connect(mapStateToProps);
const withSaga = injectSaga({ key: 'groups', saga });

export default compose(
  withSaga,
  withConnect,
)(Qrauth);
