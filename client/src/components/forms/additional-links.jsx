import React from 'react';
import { PropTypes } from 'prop-types';

const AdditionalLinks = ({ links }) => (
  <div className="additional-links">
    {links.map(({ link, text }) => (
      <span>
        <a href={link}>{text}</a>
      </span>
    ))}
  </div>
);

AdditionalLinks.defaultProps = {
  links: [],
};

AdditionalLinks.propTypes = {
  links: PropTypes.instanceOf(Array),
};

export default AdditionalLinks;
