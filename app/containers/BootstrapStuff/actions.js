/*
 *
 * BootstrapStuff actions
 *
 */

import { INIT_SIDEBAR_ROUTES, INIT_SIDEBAR_ROUTES_FAILED, INIT_SIDEBAR_ROUTES_SUCCESS } from './constants';

// init bootstrap states
export const initSidebarRoutes = () => ({
  type: INIT_SIDEBAR_ROUTES,
});

export const initSidebarRoutesSucess = routes => ({
  type: INIT_SIDEBAR_ROUTES_SUCCESS,
  routes,
});

export const initSidebarRoutesFailed = errors => ({
  type: INIT_SIDEBAR_ROUTES_FAILED,
  errors,
});
