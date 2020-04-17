import tlogo from 'assets/images/tlogo.png';

import React from 'react';
import { string } from 'prop-types';

const AdvantagesHeader = ({ title }) => (
  <article>
    <img src={tlogo} alt="veh-recovery-logo" />
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
