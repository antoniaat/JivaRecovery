import React from "react";
import logo from "../../../../../assets/images/logo.png";
import ListItem from "../list-item/ListItem";
import ButtonListItem from "../button-list-item/ButtonListItem";

const UnauthorizedNav = () => {
  return (
    <div>
      <div className="navbar">
        <section className="logo-container">
          <img src={logo} alt="logo" />
        </section>
        <nav>
          <ul>
            <ListItem link="/home" text="Начало" />
            <ListItem link="/about" text="Информация" />
            <ListItem link="/auto-listing" text="Услуги" />
            <ListItem link="/news" text="Новини" />
            <ListItem link="/contact" text="Контакти" />
            <ButtonListItem link="/login" text="Вход" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UnauthorizedNav;
