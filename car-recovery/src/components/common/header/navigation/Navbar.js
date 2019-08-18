import React from 'react';
import logo from '../../../../assets/logo.png'

import './Navbar.scss';

function Navbar() {
    return (
        <div>
            <div className='Navbar-main-navigation'>
                <section>
                    <img src={logo}></img>
                </section>
                <section>
                    <nav>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About us</a></li>
                            <li><a href='#'>Auto Listing</a></li>
                            <li><a href='#'>News</a></li>
                            <li><a href='#'><button className='button'>Contact</button></a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
    );
}

export default Navbar;
