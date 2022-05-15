import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {id:1, img:flouride,name:'Fluoride Treatment', description:'',},
        {id:2, img:cavity,name:'Cavity Filling', description:'',},
        {id:3, img:whitening,name:'Teeth Whitening', description:'',},
]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-3xl font-bold'>Our services</h3>
            <h2 className='text-5xl' >Services We Provide</h2>
           <div className='grid grid-cols-1 lg:gap-5 gap-y-5 lg:grid-cols-3 lg:px-10 ml-5'>
           {
                services.map(service=><Service service={service}></Service>)
            }
           </div>
            </div>
        </div>
    );
};

export default Services;