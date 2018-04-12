/**
 *
 * Asynchronously loads the component for Organizations
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
