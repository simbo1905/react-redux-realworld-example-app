/**
 *
 * Asynchronously loads the component for Qrauth
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
