import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from "../../../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar-main-navigation">
        <section>
          <img src={logo} alt="logo"></img>
        </section>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/auto-listing">Auto Listing</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/home">Logout</Link>
              </li>
              <li>
                <Link to="/contact">
                  <button className="button">Contact</button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
