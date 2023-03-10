export default [
  // { path: '/login', component: '@/pages/login' },
  // { path: '/reg', component: '@/pages/reg' },
  {
    path: '/',
    component: '@/layouts/base-layouts',
    routes: [
      { path: '/login', title: 'LoginPage', component: '@/pages/login' },
      { path: '/reg', title: 'Register', component: '@/pages/reg' },
      {
        path: '/goods',
        // wrappers: ['@/wrappers/auth'],
        component: '@/layouts/aside-layouts',
        routes: [
          // { path: '/goods', component: '@/pages/goods' },
          {
            path: '/goods/:id?',
            title: 'Shop',
            component: '@/pages/goods/goods-detail',
          },
          { path: '/goods/:id/comment', component: '@/pages/goods/comment' },
          {
            path: '/goods/:id/comment/:cid',
            component: '@/pages/goods/comment-detail',
          },
        ],
      },
      { path: '/dva', component: '@/pages/dva' },
      { path: '/', component: '@/pages/index' },
      // { path: '/', redirect: '/login' },
      { component: '@/pages/404' },
    ],
  },
];
