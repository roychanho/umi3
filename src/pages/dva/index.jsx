import React from 'react';
import { connect } from 'umi';
import Child from '../child';

const Dva = (props) => {
  return (
    <>
      <h3> Dva </h3>
      <h3 className="title">global state</h3>
      <div>text: {props.text}</div>
      <div>title: {props.title}</div>
      <div>a: {props.A}</div>
      {props.isLogin ? <div>Welcome</div> : <div>Please Login</div>}

      <h3 className="title">edit global state</h3>
      <button
        onClick={() => {
          props.dispatch({
            type: 'global/setText',
          });
        }}
      >
        EditText
      </button>

      <button
        onClick={() => {
          props.dispatch({
            type: 'global/setTitle',
            payload: { a: 1, b: 2 },
          });
        }}
      >
        EditTitle
      </button>

      <h3 className="title">Page models</h3>
      <p>dva {props.dva}</p>
      <p>a {props.a}</p>
      <p>b {props.b}</p>
      <h3>Edit page models</h3>
      <button onClick={() => props.dispatch({ type: 'dva/setStr' })}>
        editPageModel
      </button>

      <h3>effect request</h3>
      <button
        onClick={() =>
          props.dispatch({
            type: 'global/login',
            payload: {
              username: 'alex',
              password: 'alex123',
            },
          })
        }
      >
        dvaLogin
      </button>

      <Child />
    </>
  );
};

export default connect((state) => ({
  text: state.global.text,
  title: state.global.title,
  A: state.global.a,
  isLogin: state.global.login,

  dva: state.dva,
  a: state.a,
  b: state.b,
}))(Dva);
