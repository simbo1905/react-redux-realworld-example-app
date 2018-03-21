/**
 *
 * Asynchronously loads the component for PageTools
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
