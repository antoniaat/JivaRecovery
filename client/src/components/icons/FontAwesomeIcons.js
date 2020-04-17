/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImport,
  faPhone, faEnvelope, faMoneyBill, faSuitcase, faPuzzlePiece, faCalendar, faRoad, faCar, faArrowUp, faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook, faTwitter, faInstagram, faYoutube,
} from '@fortawesome/free-brands-svg-icons';


const defaultIcon = <FontAwesomeIcon icon={faFileImport} />;
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const fbIcon = <FontAwesomeIcon icon={faFacebook} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
const money = <FontAwesomeIcon icon={faMoneyBill} />;
const suitcase = <FontAwesomeIcon icon={faSuitcase} />;
const puzzlePiece = <FontAwesomeIcon icon={faPuzzlePiece} />;
const calendar = <FontAwesomeIcon icon={faCalendar} />;
const road = <FontAwesomeIcon icon={faRoad} />;
const transmission = <FontAwesomeIcon icon={faCar} />;
const arrowUp = <FontAwesomeIcon icon={faArrowUp} />;
const checkCircle = <FontAwesomeIcon icon={faCheckCircle} />;

export default { defaultIcon };

export {
  phoneIcon,
  mailIcon,
  fbIcon,
  twitterIcon,
  instagramIcon,
  youtubeIcon,
  money,
  suitcase,
  puzzlePiece,
  calendar,
  road,
  transmission,
  arrowUp,
  checkCircle,
};
