import "./social-icons.scss";

import React from "react";
import Slide from "react-reveal/Slide";
import {
  fbIcon,
  twitterIcon,
  instagramIcon,
  youtubeIcon,
} from "../../../../icons/font-awesome-icons";

const SocialIcons = () => (
  <Slide top>
    <section className="social-icons">
      <span className="social-icons-icon">{fbIcon}</span>
      <span className="social-icons-icon">{twitterIcon}</span>
      <span className="social-icons-icon">{instagramIcon}</span>
      <span className="social-icons-icon">{youtubeIcon}</span>
    </section>
  </Slide>
);

export default SocialIcons;
