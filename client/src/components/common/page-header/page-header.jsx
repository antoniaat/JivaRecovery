import './page-header.scss';

import React from 'react';
import { string } from 'prop-types';

const PageHeader = ({ title }) => (
  <div className="page-header">
    <h1 className="page-header-title">{title}</h1>
  </div>
);

PageHeader.propTypes = {
  title: string.isRequired,
};

export default PageHeader;
