import React, { Component } from 'react';

import './About.scss';

import tlogo from '../../../assets/tlogo.png';
import aboutBgImage from '../../../assets/about-bg.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Benefit from './Benefits/Benefit.js'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            benefits: [{
                icon: <FontAwesomeIcon icon={faMoneyBill} />,
                title: 'Affordable Auto Prices',
                subtitle: 'AutoDrive is nisi aliquip consequat duis velit esse'
            }, {
                icon: <FontAwesomeIcon icon={faSuitcase} />,
                title: '20 Years in Business',
                subtitle: 'Vehicles is nisi aliquip consequat duis velit'
            }, {
                icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
                title: 'Trusted & Genuine Parts',
                subtitle: 'Autos Drive is nisi aliquip consequat duis ted'
            }]
        }
    }

    render() {
        return (
            <div className='About' >
                <img src={tlogo}></img>
                <h2>About JivaTrade</h2>

                <section>
                    <p className='lead'>We offer high quality vehicles at unbelievable prices and creates pleasant buying experience.</p>
                    <p>AutoImage is nisi aliquip consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor sit amt consectetur adipisicing elit sed eiusmod tempor incididuntu labore et dolore magna aliqua enimad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip. Duis aute irure dolor in reprehenderitn voluptate.</p>

                    <article className='benefits-article'>
                        {this.state.benefits.map(c => <Benefit benefits={c}></Benefit>)}
                    </article>
                </section>

                <section>
                    <img src={aboutBgImage}></img>
                </section>
            </div>
        )
    };
}

export default About;