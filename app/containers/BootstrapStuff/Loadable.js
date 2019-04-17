/**
 *
 * Asynchronously loads the component for BootstrapStuff
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
