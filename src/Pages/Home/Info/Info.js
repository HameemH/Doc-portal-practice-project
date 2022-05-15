import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Infocard from './Infocard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  '>
            <Infocard bgClass='bg-gradient-to-l from-secondary to-primary' cardTitle='Opening Hours' img={clock}></Infocard>
            <Infocard bgClass='bg-accent' cardTitle='Visit Out Location' img={marker}></Infocard>
            <Infocard bgClass='bg-gradient-to-l from-secondary to-primary' cardTitle='Contact Us Now' img={phone}></Infocard>
        </div>
    );
};

export default Info;