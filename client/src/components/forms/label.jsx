import React, { useState } from 'react';
import { string } from 'prop-types';

const Label = ({
  className, type, name, placeholder,
}) => {
  const [value, setValue] = useState('');

  return (
    <label className={className} htmlFor>
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

Label.defaultProps = {
  className: '',
};

Label.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  placeholder: string.isRequired,
  className: string,
};

export default Label;
