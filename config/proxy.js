export default {
  '/api': {
    target: 'https://localhost:8081',
    https: true,
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
  '/book': {
    target: 'https://api.xxx.com',
    changeOrigin: true,
  },
};
