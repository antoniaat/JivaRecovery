import React from "react";
import "./TopBar.scss";

import FontAwesomeIcons from "../../Icons/FontAwesomeIcons";

const TopBar = () => {
  return (
    <div className="top-bar">
      <section>
        <p>
          <span>{FontAwesomeIcons.phoneIcon}</span>
          PHONE: 1.800.68016
        </p>
        <p>
          <span>{FontAwesomeIcons.mailIcon}</span>
          EMAIL: INFO@VEHRECOVERY.COM
        </p>
      </section>
      <section>
        <span>{FontAwesomeIcons.fbIcon}</span>
        <span>{FontAwesomeIcons.twitterIcon}</span>
        <span>{FontAwesomeIcons.instagramIcon}</span>
        <span>{FontAwesomeIcons.youtubeIcon}</span>
      </section>
    </div>
  );
};

export default TopBar;
