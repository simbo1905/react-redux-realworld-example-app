/**
 *
 * Qrauth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import uuidv1 from 'uuid/v1';
import QRCode from 'qrcode.react';

import Logo from 'static/logo/logo-white.svg';

import injectSaga from 'utils/injectSaga';
import makeSelectQrauth from './redux/selectors';
import saga from './redux/saga';
import messages from './messages';

import { CHECK_QR_TOKEN } from './redux/constants';

import css from './Qrauth.scss';

export class Qrauth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.guid = uuidv1();
    const intervalId = setInterval(() => {
      this.checkQRLogin();
    }, 2000);
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
      console.log('Error getting QR status', error); /* eslint-disable-line */
    }
  }
  render() {
    const qrdata = {
      type: 'web',
      guid: this.guid,
      publicKey: 'this-is-public-key',
    };
    return (
      <div className={css.wrapper}>
        <div className={css.logoWrap}>
          <a href="https://www.uniqkey.ey">
            <img className={css.logo} src={Logo} alt="UniqKey" />
          </a>
        </div>
        <header className={css.header}>
          <h1 className={css.headerTitle}>
            <FormattedHTMLMessage {...messages.title} />
          </h1>
          <h2 className={css.headerSub}><FormattedMessage {...messages.sub} /></h2>
        </header>
        <div className={css.QRCodeWrap}>
          <QRCode className={css.QRCode} value={JSON.stringify(qrdata)} size="600" />
        </div>
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
