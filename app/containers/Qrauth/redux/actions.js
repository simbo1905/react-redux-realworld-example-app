/*
 *
 * Qrauth actions
 *
 */

import { CHECK_QR_TOKEN } from './constants';

export function checkQR() {
  return {
    type: CHECK_QR_TOKEN,
  };
}
