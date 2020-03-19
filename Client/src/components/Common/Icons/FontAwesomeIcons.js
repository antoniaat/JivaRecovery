import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const fbIcon = <FontAwesomeIcon icon={faFacebook} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;

export default {
  phoneIcon,
  mailIcon,
  fbIcon,
  twitterIcon,
  instagramIcon,
  youtubeIcon
};
