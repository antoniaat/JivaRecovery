import React from 'react';
import Dropdown from 'react-dropdown';
import { string } from 'prop-types';

const DropdownItem = ({ title, data, placeholder }) => (
  <article>
    <h6>{title}</h6>
    <Dropdown
      options={data.options}
      value={data.defaultOption}
      placeholder={placeholder}
    />
  </article>
);

DropdownItem.propTypes = {
  title: string.isRequired,
  data: string.isRequired,
  placeholder: string.isRequired,
};

export default DropdownItem;
