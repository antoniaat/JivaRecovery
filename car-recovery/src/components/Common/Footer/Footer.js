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
                        Copyright &Copyright; {new Date().getFullYear()}  WordPress Theme.
All Rights Reserved.
                    </article>
                    <article>

                    </article>
                    <article>

                    </article>
                    <article>

                    </article>

                </section>
                <section>
                    Copyright &Copyright; {new Date().getFullYear()} WordPress Theme. All Rights Reserved.
                </section>
            </div>
        );
    }
}

export default Footer;