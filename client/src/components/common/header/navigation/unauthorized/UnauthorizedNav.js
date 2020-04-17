import React from 'react';
import ListItem from '../list-item/ListItem';
import ButtonListItem from '../button-list-item/ButtonListItem';
import NavHeader from '../nav-header/NavHeader';

const UnauthorizedNav = () => (
  <div>
    <div className="navbar">
      <NavHeader />
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

export default UnauthorizedNav;
