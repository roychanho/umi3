import React from 'react';
import { NavLink } from 'umi';

const Menu = () => {
  return (
    <>
      <div>
        <NavLink to="/goods/1" activeStyle={{ color: '#393' }}>
          Shop 1
        </NavLink>
      </div>
      <div>
        <NavLink to="/goods/2" activeStyle={{ color: '#393' }}>
          Shop 2
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: '/goods/3', search: '?a=1' }}
          activeStyle={{ color: '#393' }}
        >
          Shop 3
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: '/goods/4', query: { a: 2 } }}
          activeStyle={{ color: '#393' }}
        >
          Shop 4
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
