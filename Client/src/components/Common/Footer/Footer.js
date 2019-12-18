import React from "react";
import tlogo from "../../../assets/tlogo.png";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <section>
        <article>
          <img src={tlogo} alt="logo"></img>
          <p>
            Copyright © {new Date().getFullYear()} <strong>antoniaat</strong>.
          </p>
        </article>
        <article>
          <h6>USEFUL LINKS</h6>
          <a href="/home">About us</a>
          <a href="/home">Our Services</a>
          <a href="/home">Information</a>
          <a href="/home">Privacy Policy</a>
        </article>
        <article>
          <h6>OUR TERMS</h6>
          <a href="/home">Support</a>
          <a href="/home">Contacts</a>
          <a href="/home">Typography</a>
          <a href="/home">FAQ</a>
        </article>
        <article>
          <h6>SHOWROOM</h6>
          <p>
            UK, Auto, King St. 665087 Phone.: +7 234 949-58-83 E-mail.:
            info@example.com © 2019 Jiva Trade
          </p>
        </article>
      </section>
      <section>
        <p>
          Copyright © {new Date().getFullYear()} <strong>antoniaat</strong>. All
          Rights Reserved.
        </p>
      </section>
    </div>
  );
}

export default Footer;
