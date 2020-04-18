import React from 'react';

import tlogo from 'assets/images/tlogo.png';

const FormHeader = ({ title, subtitle }) => (
  <>
    <img src={tlogo} alt="logo" />
    <h1>{title}</h1>
    <p>
      <span>-</span>
      {' '}
      {subtitle}
      {' '}
      <span>-</span>
    </p>
  </>
);

export default FormHeader;
