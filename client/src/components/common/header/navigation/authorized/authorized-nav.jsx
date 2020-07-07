import React, { useContext, useEffect, useState } from "react";
import ListItem from "../list-item/list-item";
import userService from "../../../../../services/user-service";
import { AuthContext } from "../../../../../ContextWrapper";

const AuthorizedNav = ({ history }) => {
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

  const adminItems = <ListItem link="/administration" text="Администрация" />;

  {
    /* <ListItem link="/profile" text="Профил" /> */
  }

  const userItems = <ListItem link="/request" text="Нова заявка" />;

  return (
    <ul>
      <ListItem link="/home" text="Начало" />
      <ListItem link="/about" text="Информация" />
      <ListItem link="/services" text="Видове транспорт" />

      {isAdmin ? { adminItems } : { userItems }}
      <li className="list-item">
        <a href="#" onClick={logout}>
          ИЗХОД
        </a>
      </li>
    </ul>
  );
};

export default AuthorizedNav;
