import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
                <img src={notFound} alt="" />
                <br />
                <Link to="/"className="bg-dark"> Go Back
                </Link> 
        </div>
    );
};

export default NotFound;