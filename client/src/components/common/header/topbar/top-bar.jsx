import './top-bar.scss';

import React from 'react';

import { phoneIcon, mailIcon } from '../../../icons/font-awesome-icons';
import SocialIcons from './social-icons/social-icons';
import ContactBox from './contact-box/contact-box';

const TopBar = () => (
  <div className="top-bar">
    <section className="top-bar-wrapper">
      <section className="contacts-container">
        <ContactBox icon={phoneIcon} text="ТЕЛЕФОН: 1.800.68016" />
        <ContactBox icon={mailIcon} text="ИМЕЙЛ: INFO@VEHRECOVERY.COM" />
      </section>
      <SocialIcons />
    </section>
  </div>
);

export default TopBar;
