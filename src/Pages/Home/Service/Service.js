import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    // const {service} =props;
    const {id,name,Price,discription,img}=service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="picture"/>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h5>price:{Price}</h5>
            <p>{discription}</p>
            <Link to={`/booking/${id}`}>
            <button className="bg-danger">Boooking {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;