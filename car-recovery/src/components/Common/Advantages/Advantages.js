import React, { Component } from 'react';
import tlogo from '../../../assets/tlogo.png';
import dealership from '../../../assets/icons/dealership.png';
import prices from '../../../assets/icons/prices.png';
import safety from '../../../assets/icons/safety.png';

import './Advantages.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

class Advantages extends Component {
    constructor(props) {
        super(props);
        this.firstArticleClick = this.firstArticleClick.bind(this);
        this.secondArticleClick = this.secondArticleClick.bind(this);
        this.thirdArticleClick = this.thirdArticleClick.bind(this);

        this.state = {
            firstIsActive: false,
            secondIsActive: true,
            thirdIsActive: false
        }
    }

    firstArticleClick() {
        this.setState({ firstIsActive: !this.state.firstIsActive })
    }
    secondArticleClick() {
        this.setState({ secondIsActive: !this.state.secondIsActive })
    }
    thirdArticleClick() {
        this.setState({ thirdIsActive: !this.state.thirdIsActive })
    }

    render() {
        const arrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />

        return (
            <div className='Advantages'>
                <article>
                    <img src={tlogo}></img>
                    <h1>Our Advantages</h1>
                </article>
                <article>
                    <div onClick={this.firstArticleClick} className={this.state.firstIsActive ? "active" : "notActive"}>
                        <img src={dealership}></img>
                        <h5>Largest Dealership</h5>
                        <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                        <button>{arrowUpIcon}</button>
                    </div>
                    <div onClick={this.secondArticleClick} className={this.state.secondIsActive ? "active" : "notActive"}>
                        <img src={prices}></img>
                        <h5>Lower Car Prices</h5>
                        <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                        <button>{arrowUpIcon}</button>
                    </div>
                    <div onClick={this.thirdArticleClick} className={this.state.thirdIsActive ? "active" : "notActive"}>
                        <img src={safety}></img>
                        <h5>Multipoint Safety</h5>
                        <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                        <button>{arrowUpIcon}</button>
                    </div>
                </article>
            </div>
        );
    }
}

export default Advantages;