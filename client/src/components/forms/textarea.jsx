import React, { useState } from 'react';
import { string } from 'prop-types';

const Textarea = ({ name, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <label htmlFor className='textarea-label'>
      <textarea
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};

Textarea.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
};

export default Textarea;
