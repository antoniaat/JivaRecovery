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
      <div className="navbar-wrapper">
        <NavHeader />
        {auth ? <AuthorizedNav /> : <UnauthorizedNav />}
      </div>
    </nav>
  );
};

export default Navbar;
