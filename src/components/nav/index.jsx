import React from 'react';
import { NavLink } from 'umi';

const Nav = () => {
  return (
    <>
      <NavLink to="/goods" activeStyle={{ color: '#393' }}>
        Shop
      </NavLink>
      <NavLink to="/login" activeStyle={{ color: '#393' }}>
        Login
      </NavLink>
      <NavLink to="/reg" activeStyle={{ color: '#393' }}>
        Register
      </NavLink>
    </>
  );
};

export default Nav;
