import "./contact-box.scss";

import React from "react";
import Slide from "react-reveal/Slide";
import { string } from "prop-types";

const ContactBox = ({ icon, text }) => (
  <Slide top>
    <p className="contact-box">
      <span>{icon}</span>
      {text}
    </p>
  </Slide>
);

ContactBox.propTypes = {
  icon: string.isRequired,
  text: string.isRequired,
};

export default ContactBox;
