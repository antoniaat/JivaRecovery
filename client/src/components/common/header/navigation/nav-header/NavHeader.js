import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/images/logo.png';

const NavHeader = () => (
  <Link to="home">
    <section className="logo-container">
      <img src={logo} alt="logo" />
    </section>
  </Link>
);

export default NavHeader;
