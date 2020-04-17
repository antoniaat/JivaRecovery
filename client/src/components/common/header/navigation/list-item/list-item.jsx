import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const ListItem = ({ link, text }) => (
  <li className="list-item">
    <Link to={link}>{text}</Link>
  </li>
);

ListItem.propTypes = {
  link: string.isRequired,
  text: string.isRequired,
};

export default ListItem;
