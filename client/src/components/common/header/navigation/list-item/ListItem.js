import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ link, text }) => (
  <li>
    <Link to={link}>{text}</Link>
  </li>
);

export default ListItem;
