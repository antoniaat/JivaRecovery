import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ link, text }) => {
  return (
    <li>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default ListItem;
