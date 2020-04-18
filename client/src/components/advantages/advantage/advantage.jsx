import './advantage.scss';

import React from 'react';
import { string } from 'prop-types';
import { arrowUp } from '../../icons/font-awesome-icons';

const Advantage = ({ img, title, text }) => (
  <article className="advantage">
    <img src={img} alt={`${img}-img`} />
    <h5>{title}</h5>
    <p>{text}</p>
    <button type="button">{arrowUp}</button>
  </article>
);

Advantage.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
};

export default Advantage;
