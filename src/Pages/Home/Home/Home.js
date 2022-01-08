import React from 'react';
import Services from '../Services/Services';
import Exparts from '../Exparts/Exparts';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <h1>Hello all about</h1>
            <Bannar></Bannar>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;