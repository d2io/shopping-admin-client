/**
 *
 * Asynchronously loads the component for Authentication
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
