import React from "react";
import icons from "../../../../icons/FontAwesomeIcons";

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
