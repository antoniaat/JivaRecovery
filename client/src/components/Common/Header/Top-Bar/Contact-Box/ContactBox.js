import React from "react";

const ContactBox = ({ icon, text }) => {
  return (
    <p>
      <span>{icon}</span>
      {text}
    </p>
  );
};

export default ContactBox;
