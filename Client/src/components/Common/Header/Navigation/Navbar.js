import React from "react";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => (
  <div>
    <div className="Navbar-main-navigation">
      <section>
        <img src={logo}></img>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="#">Auto Listing</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
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

export default Navbar;
