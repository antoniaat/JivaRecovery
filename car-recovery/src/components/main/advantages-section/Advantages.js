import React from 'react';
import tlogo from '../../../assets/tlogo.png';
import dealership from '../../../assets/icons/dealership.png';
import prices from '../../../assets/icons/prices.png';
import safety from '../../../assets/icons/safety.png';

// Styles and Assets
import './Advantages.scss';

function Advantages() {
    return (
        <div className='Advantages'>
            <article>
                <img src={tlogo}></img>
                <h1>Our Advantages</h1>
            </article>
            <article>
                <div>
                    <img src={dealership}></img>
                    <h5>Largest Dealership</h5>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div>
                    <img src={prices}></img>
                    <h5>Lower Car Prices</h5>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
                <div>
                    <img src={safety}></img>
                    <h5>Multipoint Safety</h5>
                    <p>AutoImage is aliquip consequat to duis elit tam cillum dolore fugiat null pariatur excepteur sint for occaecat.</p>
                </div>
            </article>
        </div>
    );
}

export default Advantages;