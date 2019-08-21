import React, { Component } from 'react';
import tlogo from '../../../assets/tlogo.png'

import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <section>
                    <article>
                        <img src={tlogo}></img>
                        <p>
                            Copyright © {new Date().getFullYear()} <strong>antoniaat</strong>.
                        </p>
                    </article>
                    <article>
                        <h6>USEFUL LINKS</h6>
                        <a href='#'>About us</a>
                        <a href='#'>Our Services</a>
                        <a href='#'>Information</a>
                        <a href='#'>Privacy Policy</a>
                    </article>
                    <article>
                        <h6>OUR TERMS</h6>
                        <a href='#'>Support</a>
                        <a href='#'>Contacts</a>
                        <a href='#'>Typography</a>
                        <a href='#'>FAQ</a>
                    </article>
                    <article>
                        <h6>SHOWROOM</h6>
                        <p>UK, Auto, King St. 665087 Phone.: +7 234 949-58-83 
                            E-mail.: info@example.com
                            © 2019 Jiva Trade</p>
                    </article>
                </section>
                <section>
                    <p>
                        Copyright © {new Date().getFullYear()} <strong>antoniaat</strong>. All Rights Reserved.
                    </p>
                </section>
            </div>
        );
    }
}

export default Footer;