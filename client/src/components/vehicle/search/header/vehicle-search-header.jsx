import './vehicle-search-header.scss';

import React from 'react';
import { string, number } from 'prop-types';

const VehicleSearchHeader = ({ header, deliversCount }) => (
  <header className="vehicle-search-header">
    <article>
      <h1 className="vehicle-search-header-title">{header}</h1>
    </article>
    <article>
      <span className="vehicle-search-header-line">-</span>
      <p className="vehicle-search-header-text">
        ОТ
        {deliversCount}
        + ДОСТАВЧИКА
      </p>
      <span className="vehicle-search-header-line">-</span>
    </article>
  </header>
);

VehicleSearchHeader.defaultProps = {
  header: 'Търсене на транспортни услуги',
  deliversCount: 0,
};

VehicleSearchHeader.propTypes = {
  header: string,
  deliversCount: number,
};

export default VehicleSearchHeader;
