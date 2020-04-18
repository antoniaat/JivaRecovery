import React from 'react';
import { string } from 'prop-types';

const Submit = ({ value }) => (
  <input type="submit" value={value} />
);

Submit.defaultProps = {
  value: 'ИЗПРАТИ',
};

Submit.propTypes = {
  value: string,
};

export default Submit;
