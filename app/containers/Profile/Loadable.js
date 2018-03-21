/**
 *
 * Asynchronously loads the component for PageProfile
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
