import React from "react";
import "./Navbar.scss";
import logo from "../../../../assets/images/logo.png";
import ListItem from "./list-item/ListItem";
import ButtonListItem from "./button-list-item/ButtonListItem";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <section className="logo-container">
          <img src={logo} alt="logo"></img>
        </section>
        <nav>
          <ul>
            <ListItem link="/home" text="Начало" />
            <ListItem link="/about" text="Информация" />
            <ListItem link="/auto-listing" text="Услуги" />
            <ListItem link="/news" text="Новини" />
            <ListItem link="/login" text="Вход" />
            <ListItem link="/home" text="Изход" />
            <ButtonListItem link="/contact" text="Контакти" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
