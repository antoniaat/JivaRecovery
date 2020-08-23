import './advantages-header.scss';

import React from 'react';
import { string } from 'prop-types';

const AdvantagesHeader = ({ title }) => (
  <header className="advantages-header">
    <h1>{title}</h1>
  </header>
);

AdvantagesHeader.defaultProps = {
  title: 'Защо да изберете нас',
};

AdvantagesHeader.propTypes = {
  title: string,
};

export default AdvantagesHeader;
