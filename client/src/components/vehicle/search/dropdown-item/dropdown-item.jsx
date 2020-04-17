import React from 'react';
import Dropdown from 'react-dropdown';
import { string } from 'prop-types';

const DropdownItem = ({ title, data, placeholder }) => {
  const { options, defaultOption } = data;

  return (
    <article>
      <h6>{title}</h6>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder={placeholder}
      />
    </article>
  );
};

DropdownItem.propTypes = {
  title: string.isRequired,
  data: string.isRequired,
  placeholder: string.isRequired,
};

export default DropdownItem;
