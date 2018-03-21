/**
 *
 * Asynchronously loads the component for PageUsers
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
