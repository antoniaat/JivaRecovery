import './advantages-header.scss';

import React from 'react';
import { string } from 'prop-types';

const AdvantagesHeader = ({ title }) => (
  <article className="advantages-header">
    <h1>{title}</h1>
  </article>
);

AdvantagesHeader.defaultProps = {
  title: 'Защо да изберете нас',
};

AdvantagesHeader.propTypes = {
  title: string,
};

export default AdvantagesHeader;
