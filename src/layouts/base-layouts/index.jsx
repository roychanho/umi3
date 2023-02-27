import React from 'react';
import Nav from '../../components/nav';

const BaseLayouts = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div>{props.children}</div>
    </div>
  );
};

export default BaseLayouts;
