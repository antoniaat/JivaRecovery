import React from "react";
import "./TopBar.scss";

import icons from "../../Icons/FontAwesomeIcons";
import SocialIcons from "./Social-Icons/SocialIcons";
import ContactBox from "./Contact-Box/ContactBox";

const TopBar = () => {
  return (
    <div className="top-bar">
      <section className="contacts-container">
        <ContactBox icon={icons.phoneIcon} text="ТЕЛЕФОН: 1.800.68016" />
        <ContactBox icon={icons.mailIcon} text="ИМЕЙЛ: INFO@VEHRECOVERY.COM" />
      </section>
      <SocialIcons />
    </div>
  );
};

export default TopBar;
