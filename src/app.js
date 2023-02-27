// import { request, history } from 'umi';

// let routesData = []; // by action get routes

// export function patchRoutes({ routes }) {
//   // add action route
//   // default routes

//   // add one route
// //   routes.push({ exact: true, component: require('@/pages/404').default });
// }

// export const render = async (oldRender) => {
//   const { isLogin } = await request('/umi/auth');
//   if (!isLogin) {
//     history.push('/login');
//   } else {
//     routesData = await request('/umi/menus');
//   }
//   oldRender();
//   // oldRender must run one time
// };

export function onRouteChange({ matchedRoutes, location, routes, action }) {
  console.log('routes', routes);
  console.log('matchedRoutes', matchedRoutes);
  console.log('location', location);
  console.log('action', action);

  document.title =
    matchedRoutes[matchedRoutes.length - 1].route.title || 'custom';
}

export const request = {
  // timeout: 1000,
  // errorConfig: {},
  // middlewares: [],
  requestInterceptors: [
    (url, options) => {
      options.headers = { token: '12345678' };
      return { url, options };
    },
  ],
  responseInterceptors: [
    (response, options) => {
      return response;
    },
  ],
};
