/**
 *
 * Asynchronously loads the component for PagePasswords
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
