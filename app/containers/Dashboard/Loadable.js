/**
 *
 * Asynchronously loads the component for PageHome
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
