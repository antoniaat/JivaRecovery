import React, { useState } from 'react';
import { string } from 'prop-types';

const Label = ({ type, name, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <label htmlFor>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

Label.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  placeholder: string.isRequired,
};

export default Label;
