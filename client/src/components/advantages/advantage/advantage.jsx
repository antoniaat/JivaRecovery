/* eslint-disable jsx-a11y/no-static-element-interactions */

import './advantage.scss';

import React, { useState } from 'react';
import { string } from 'prop-types';
import { arrowUp } from '../../icons/FontAwesomeIcons';

const Advantage = ({ img, title, text }) => {
  const [active, setActive] = useState(true);
  const isActiveClassName = active ? 'active' : 'not-active';

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={() => setActive(!active)} className={`advantage ${isActiveClassName}`}>
      <img src={img} alt={`${img}-img`} />
      <h5>{title}</h5>
      <p>{text}</p>
      <button type="button">{arrowUp}</button>
    </div>
  );
};

Advantage.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
};

export default Advantage;
