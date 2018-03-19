/**
 *
 * Asynchronously loads the component for PageReports
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
