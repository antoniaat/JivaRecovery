import React from 'react';
import { string } from 'prop-types';

const ContactBox = ({ icon, text }) => (
  <p className="contact-box">
    <span>{icon}</span>
    {text}
  </p>
);

ContactBox.propTypes = {
  icon: string.isRequired,
  text: string.isRequired,
};

export default ContactBox;
