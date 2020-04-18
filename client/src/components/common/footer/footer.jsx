import './footer.scss';

import tlogo from 'assets/images/tlogo.png';

import React from 'react';
import Copyright from './copyright/copyright';

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
            <a href="/home">Услуги</a>
          </li>
          <li>
            <a href="/about">Информация</a>
          </li>
        </ul>

      </article>
      <article>
        <h6>КОНТАКТ</h6>
        <ul />
        <a href="/home">Контакти</a>
        <a href="/home">FAQ</a>
      </article>
      <article>
        <h6>КЪДЕ ДА НИ НАМЕРИТЕ</h6>
        <p>
          UK, Auto, King St. 665087 Телефон.: +7 234 949-58-83 E-mail.:
          info@vehrecoverys.com
        </p>
      </article>
    </section>
    <section className="bottom-footer-wrapper">
      <Copyright />
    </section>
  </footer>
);

export default Footer;