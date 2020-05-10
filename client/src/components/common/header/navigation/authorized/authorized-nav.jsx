import React, { useContext } from "react";
import ListItem from "../list-item/list-item";
import userService from "../../../../../services/user-service";
import { AuthContext } from "../../../../../ContextWrapper";

const AuthorizedNav = ({ history }) => {
  const { setAuth } = useContext(AuthContext);

  function logout(e) {
    e.preventDefault();
    userService.logout();
    setAuth(false);
  }

  return (
    <ul>
      <ListItem link="/home" text="Начало" />
      <ListItem link="/about" text="Информация" />
      <ListItem link="/services" text="Услуги" />
      <ListItem link="/news" text="Новини" />
      <ListItem link="/home" text="Профил" />
      <li className="list-item">
        <a href='#' onClick={logout}>ИЗХОД</a>
      </li>
    </ul>
  );
};

export default AuthorizedNav;
