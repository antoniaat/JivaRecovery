import React from 'react';
import './PageHeader.scss';

const PageHeader = (props) => {
    return (
        <div className='PageHeader'>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
        </div>
    );
}

export default PageHeader;