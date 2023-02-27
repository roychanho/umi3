import { request } from 'umi';
import key from 'keymaster'; // check keyboard effect

export default {
  state: {
    title: 'global title',
    text: 'global text',
    login: false,
    a: 'global a',
  },
  reducers: {
    setText(state) {
      return {
        ...state,
        text: 'global edit text' + Math.random().toFixed(2),
      };
    },
    setTitle(state, action) {
      return {
        ...state,
        title: `global edit title${action.payload.a}/${action.payload.b}`,
      };
    },
    signin: (state, action) => ({
      ...state,
      login: true,
    }),
  },
  effects: {
    *login(action, { call, put, select }) {
      const data = yield call(request, '/umi/login', {
        method: 'post',
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      // put send to reducers
      yield put({
        type: 'signin',
        payload: data,
      });
    },
  },
  subscriptions: {
    listenRoute({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        console.log('global subscription', pathname, query);
      });
    },
    listenResize() {
      window.onresize = function () {
        console.log('onresize');
      };
    },
    listenScroll() {
      window.onscroll = function () {
        console.log('onscroll');
      };
    },
    // listenKeyboard(dispatch) {
    //   key('⌘+r, ctrl+r', () => {
    //     dispatch({ type: 'setText' });
    //   });
    // },
  },
};
