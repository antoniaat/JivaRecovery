import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const ButtonListItem = ({ link, text }) => (
  <li className="button-list-item">
    <Link to={link}>
      <button type="button" className="button">{text}</button>
    </Link>
  </li>
);

ButtonListItem.propTypes = {
  link: string.isRequired,
  text: string.isRequired,
};

export default ButtonListItem;
