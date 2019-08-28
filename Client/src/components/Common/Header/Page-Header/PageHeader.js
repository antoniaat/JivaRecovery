import React from 'react';
import './PageHeader.scss';
import Breadcrumbs from '../Navigation/Breadcrumbs/Breadcrumbs.js'

const PageHeader = (props) => {
    return (
        <div className='PageHeader'>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <div className='breadcrumbs'>
                <Breadcrumbs></Breadcrumbs>
            </div>
        </div>
    );
}

export default PageHeader;