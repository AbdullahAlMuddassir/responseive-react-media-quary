import React from 'react';
import Services from '../Services/Services';
import Exparts from '../Exparts/Exparts';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;