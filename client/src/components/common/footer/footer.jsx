import tlogo from "assets/images/dark-logo.jpg";

import "./footer.scss";

import React from "react";
import Copyright from "./copyright/copyright";

const Footer = () => (
  <footer className="footer">
    <section className="main-footer-wrapper">
    <article>
        <img className="footer-logo" src={tlogo} alt="logo" />
      </article>
      <article>
        <h6>ПОЛЕЗНИ ЛИНКОВЕ</h6>
        <ul>
          <li>
            <a href="/about">За нас</a>
          </li>
          <li>
            <a href="/home">Видове транспорт</a>
          </li>
          <li>
            <a href="/about">Информация</a>
          </li>
          <li>
            <a href="/contact">Контакти</a>
          </li>
        </ul>
      </article>
      <article>
        <h6>КЪДЕ ДА НИ НАМЕРИТЕ</h6>
        <p>UK, Auto, King St. 612087</p>
        <p>Телефон.: +7957 511350</p>
        <p>E-mail: info@jivarecovery.com</p>
      </article>
    
    </section>
    <section className="bottom-footer-wrapper">
      <Copyright />
    </section>
  </footer>
);

export default Footer;
