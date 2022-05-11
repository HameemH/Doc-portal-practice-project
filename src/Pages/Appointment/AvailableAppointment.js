import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentServices from './AppointmentServices';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([])
    console.log(services);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='lg:mx-10'>
            <h1 className='text-secondary text-center text-2xl font-bold'>Available Appointment on: {format(date,"PP")}</h1>
        
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4'>
          {services?.map(service=><AppointmentServices service={service} key={service._id} ></AppointmentServices>)}
          </div>
        </div>
    );
};

export default AvailableAppointment;