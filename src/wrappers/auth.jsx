import React from 'react';
import { Redirect } from 'umi';

const auth = (props) => {
  if (true) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default auth;
