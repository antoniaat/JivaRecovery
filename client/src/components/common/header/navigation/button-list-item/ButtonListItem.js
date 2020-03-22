import React from "react";
import { Link } from "react-router-dom";

const ButtonListItem = ({ link, text }) => {
  return (
    <li>
      <Link to={link}>
        <button className="button">{text}</button>
      </Link>
    </li>
  );
};
export default ButtonListItem;