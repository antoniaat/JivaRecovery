import React from "react";
import Dropdown from "react-dropdown";

const DropdownItem = ({ title, data, placeholder }) => {
  return (
    <article>
      <h6>{title}</h6>
      <Dropdown
        options={data.options}
        value={data.defaultOption}
        placeholder={placeholder}
      />
    </article>
  );
};

export default DropdownItem;
