import "./top-bar.scss";

import React from "react";

import { phoneIcon, mailIcon } from "../../../icons/font-awesome-icons";
import SocialIcons from "./social-icons/social-icons";
import ContactBox from "./contact-box/contact-box";
import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";

const TopBar = () => (
  <div className="top-bar">
    <PageContentWrapper className="top-bar-wrapper">
      <section className="contacts-container">
        <ContactBox icon={phoneIcon} text="ТЕЛЕФОН: +7957 511350" />
        <ContactBox
          icon={mailIcon}
          text="ИМЕЙЛ: 
JIVATRADEUK@GMAIL.COM"
        />
      </section>
      <SocialIcons />
    </PageContentWrapper>
  </div>
);

export default TopBar;
