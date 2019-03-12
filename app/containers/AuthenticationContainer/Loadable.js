/**
 *
 * Asynchronously loads the component for AuthenticationContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
