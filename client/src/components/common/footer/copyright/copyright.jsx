import './copyright.scss';

import React from 'react';

const currentYear = new Date().getFullYear();
const copyright = ` Copyright © ${currentYear} `;

const Copyright = () => (
  <p className="copyright">
    {copyright}
    <strong>
      <a href="http://antoniaat.com">antoniaat</a>
    </strong>
    . All rights reserved.
  </p>
);

export default Copyright;
