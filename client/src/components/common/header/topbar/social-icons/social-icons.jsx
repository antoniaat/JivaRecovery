import './social-icons.scss';

import React from 'react';
import {
  // eslint-disable-next-line import/named
  fbIcon, twitterIcon, instagramIcon, youtubeIcon,
} from '../../../../icons/FontAwesomeIcons';

const SocialIcons = () => (
  <section className="social-icons">
    <span>{fbIcon}</span>
    <span>{twitterIcon}</span>
    <span>{instagramIcon}</span>
    <span>{youtubeIcon}</span>
  </section>
);

export default SocialIcons;
