import React from 'react';
import './Service.css'

const Service = ({service}) => {
    // const {service} =props;
    const {id,name,Price,discription,img}=service;
    return (
        <div className='service'>
            <img src={img} alt="picture"/>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h5>price:{Price}</h5>
            <p>{discription}</p>
        </div>
    );
};

export default Service;