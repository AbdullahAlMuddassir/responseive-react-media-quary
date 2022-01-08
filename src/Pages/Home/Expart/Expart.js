import React from 'react';

const Expart = ({expart}) => {
    const {name,img,expertize}=expart;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="picture"/>
            <h3>Name:{name}</h3>
            <h5 className="text-danger">Expart:{expertize}</h5>
        </div>
    );
};

export default Expart;