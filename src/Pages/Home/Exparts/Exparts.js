import React from 'react';
import machanic1 from '../../../images/Exparts/Macanic1.png';
import machanic2 from '../../../images/Exparts/Macanic2.png';
import machanic3 from '../../../images/Exparts/Macanic3.png';
import machanic4 from '../../../images/Exparts/Macanic4.png';
import Expart from '../Expart/Expart';

const exparts =[
    {
        img:machanic1,
        name:"Burichi March",
        expertize:"Engine expart"
    },
    {
        img:machanic2,
        name:"Burichi March",
        expertize:"Engine expart"
    },
    {
        img:machanic3,
        name:"Burichi March",
        expertize:"Engine expart"
    },
    {
        img:machanic4,
        name:"Burichi March",
        expertize:"Engine expart",
    }
]
const Exparts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-primary mt-5">Our Exparts</h1>
            <div className="row">
                {
                    exparts.map(expart => <Expart
                    key={expart.name}
                    expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;