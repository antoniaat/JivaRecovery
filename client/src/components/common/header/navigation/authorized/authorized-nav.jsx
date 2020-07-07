import React, { useContext, useEffect, useState } from "react";
import ListItem from "../list-item/list-item";
import userService from "../../../../../services/user-service";
import { AuthContext } from "../../../../../ContextWrapper";

const AuthorizedNav = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  function logout(e) {
    e.preventDefault();
    userService.logout();
    setAuth("");
  }

  useEffect(() => {
    userService.getUser(auth).then((res) => {
      setIsAdmin(res.isAdmin);
    }, []);
  });

  return (
    <ul>
      <ListItem link="/home" text="Начало" />
      <ListItem link="/about" text="Информация" />
      <ListItem link="/services" text="Видове транспорт" />
      <ListItem link="/profile" text="Профил" />
      {isAdmin 
        ? <ListItem link="/administration" text="Администрация" />
        : <ListItem link="/request" text="Нова заявка" />
      }
      <li className="list-item">
        <a href="#" onClick={logout}>
          ИЗХОД
        </a>
      </li>
    </ul>
  );
};

export default AuthorizedNav;
