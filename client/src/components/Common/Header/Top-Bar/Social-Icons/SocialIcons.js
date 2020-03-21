import React from "react";
import icons from "../../../Icons/FontAwesomeIcons";

const SocialIcons = () => {
  return (
    <section className="social-icons-container">
      <span>{icons.fbIcon}</span>
      <span>{icons.twitterIcon}</span>
      <span>{icons.instagramIcon}</span>
      <span>{icons.youtubeIcon}</span>
    </section>
  );
};

export default SocialIcons;
