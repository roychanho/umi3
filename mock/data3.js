export default {
  '/umi/auth': (req, res) => {
    res.send({ isLogin: false });
  },
  'POST /umi/login': (req, res) => {
    const { username, password } = req.body;
    if (username === 'alex' && password === 'alex123') {
      res.send({
        err: 0,
        msg: 'success',
        currentAuthority: 'user',
      });
    } else if (username === 'admin' && password === 'admin123') {
      res.send({
        err: 0,
        msg: 'success',
        currentAuthority: 'admin',
      });
    } else {
      res.send({
        err: 1,
        msg: 'fail',
      });
    }
  },
  '/umi/menus': (req, res) => {
    res.send([
      {
        path: '/',
        component: '@/layouts/base-layouts',
        routes: [
          {
            path: '/goods',
            // wrappers: ['@/wrappers/auth'],
            component: '@/layouts/aside-layouts',
            routes: [
              { path: '/goods', component: '@/pages/goods' },
              { path: '/goods/:id?', component: '@/pages/goods/goods-detail' },
              {
                path: '/goods/:id/comment',
                component: '@/pages/goods/comment',
              },
              {
                path: '/goods/:id/comment/:cid',
                component: '@/pages/goods/comment-detail',
              },
              { component: '@/pages/404' },
            ],
          },
          { path: '/dva', component: '@/pages/dva' },
          { path: '/', component: '@/pages/index' },
          // { path: '/', redirect: '/login' },
          { component: '@/pages/404' },
        ],
      },
    ]);
  },
};
