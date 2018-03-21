/**
 *
 * Asynchronously loads the component for PageBilling
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
