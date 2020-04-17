import React from 'react';
import { string, number } from 'prop-types';

const VehicleSearchHeader = ({ header, deliversCount }) => (
  <header>
    <article>
      <h1>{header}</h1>
    </article>
    <article>
      <span>-</span>
      <p>
        ОТ
        {deliversCount}
        + ДОСТАВЧИКА
      </p>
      <span>-</span>
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
