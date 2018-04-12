/*
 * Qrauth Messages
 *
 * This contains all the text for the Qrauth component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.login.qrauth.title',
    defaultMessage: 'Scan the QR code <br/>using your UniqKey-app',
  },
  sub: {
    id: 'app.login.qrauth.sub',
    defaultMessage: 'This allows you to safely sign in to your account. Once you scan the QR code you will be redirected to your dashboard.',
  },
});
