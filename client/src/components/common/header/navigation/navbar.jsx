import './navbar.scss';

import React, { useContext } from 'react';

import { AuthContext } from '../../../../ContextWrapper';
import NavHeader from './nav-header/nav-header';
import AuthorizedNav from './authorized/authorized-nav';
import UnauthorizedNav from './unauthorized/unauthorized-nav';


const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <NavHeader />
      {auth ? <AuthorizedNav /> : <UnauthorizedNav />}
    </nav>
  );
};

export default Navbar;
