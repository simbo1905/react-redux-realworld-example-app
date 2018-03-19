/**
 *
 * Asynchronously loads the component for PageCompany
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
