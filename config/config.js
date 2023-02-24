import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none', // 'all' slow and best compatibility ,'none' quick normal compatibility
  },
  routes: routes,
  fastRefresh: {},
  devServer: {
    port: 8081, // if env file set here will not change.
    // https: true //start http host security ask
  },
  title: 'UMI3', // set title
  // favicon: ""  // if you want to use local image, must open the public folder and get path
  // dynamicImport: {
  //   loading: '@/components/loading', // when loading the website will show
  // },
});
