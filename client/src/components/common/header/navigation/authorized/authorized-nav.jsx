import React, { useContext } from 'react';
import ListItem from '../list-item/list-item';
import userService from '../../../../../services/user-service';
import { AuthContext } from '../../../../../ContextWrapper';

const AuthorizedNav = ({ history }) => {
  const { _, updateAuth } = useContext(AuthContext);

  function logout(e) {
    e.preventDefault();
    userService.logout();
    localStorage.removeItem('user');
    updateAuth(false);
    history.push('/home');
  }

  return (
    <ul>
      <ListItem link="/home" text="Начало" />
      <ListItem link="/about" text="Информация" />
      <ListItem link="/services" text="Услуги" />
      <ListItem link="/news" text="Новини" />
      <ListItem link="/home" text="Профил" />
      <ListItem link="/home" text="Изход" onClick={logout} />
    </ul>
  );
};

export default AuthorizedNav;
