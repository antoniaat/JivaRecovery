import React from 'react';

import ListItem from '../list-item/list-item';
import ButtonListItem from '../button-list-item/button-list-item';

const UnauthorizedNav = () => (
  <ul>
    <ListItem link="/home" text="Начало" />
    <ListItem link="/about" text="Информация" />
    <ListItem link="/services" text="Видове транспорт" />
    <ListItem link="/contact" text="Контакти" />
    <ButtonListItem link="/login" text="Вход" />
  </ul>
);

export default UnauthorizedNav;
