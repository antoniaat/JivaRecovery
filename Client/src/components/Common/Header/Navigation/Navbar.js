import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from "../../../../assets/images/logo.png";

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
                <Link to="/home">Начало</Link>
              </li>
              <li>
                <Link to="/about">Информация</Link>
              </li>
              <li>
                <Link to="/auto-listing">Услуги</Link>
              </li>
              <li>
                <Link to="/news">Новини</Link>
              </li>
              <li>
                <Link to="/login">Вход</Link>
              </li>

              <li>
                <Link to="/home">Изход</Link>
              </li>
              <li>
                <Link to="/contact">
                  <button className="button">Контакти</button>
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
