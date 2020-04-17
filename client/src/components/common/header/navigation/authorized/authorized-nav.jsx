import React, { useContext } from 'react';
import ListItem from '../list-item/ListItem';
import userService from '../../../../../services/user-service';
import { AuthContext } from '../../../../../ContextWrapper';
import NavHeader from '../nav-header/NavHeader';

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
    <div className="navbar">
      <NavHeader />
      <nav>
        <ul>
          <ListItem link="/home" text="Начало" />
          <ListItem link="/about" text="Информация" />
          <ListItem link="/auto-listing" text="Услуги" />
          <ListItem link="/news" text="Новини" />
          <ListItem link="/home" text="Профил" />
          <ListItem link="/home" text="Изход" onClick={logout} />
        </ul>
      </nav>
    </div>
  );
};

export default AuthorizedNav;
