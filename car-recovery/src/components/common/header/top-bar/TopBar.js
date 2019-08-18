import React from 'react';

import './TopBar.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function TopBar() {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const mailIcon =  <FontAwesomeIcon icon={faEnvelope} />
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />

    return (
        <div className='topBar'>
            <section>
                <p className='phone-number'>
                    <span>{phoneIcon}</span>
                    PHONE: 1.800.68016</p>
                <p className='email'>
                    <span>{mailIcon}</span>
                    EMAIL: SUPPORT@EXAMPLE.COM</p>
            </section>
            <section>
                <span>{fbIcon}</span>
                <span>{twitterIcon}</span>
                <span>{instagramIcon}</span>
                <span>{youtubeIcon}</span>
            </section>
        </div>
    );
}

export default TopBar;