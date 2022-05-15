import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentServices from './AppointmentServices';
import AppointmentModal from './AppointmentModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({date}) => {
    // const [services,setServices] = useState([])
    const [appointment, setAppointment] = useState(null);
    const formattedDate = format(date, 'PP');
    const {data:services , isLoading, refetch} = useQuery (['available',formattedDate],()=>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)      
         .then(res=>res.json()))
        if(isLoading){
            return <Loading></Loading>
        }

   /*  useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formattedDate}`)      
         .then(res=>res.json())
        .then(data=>{
            setServices(data)
            
        }) 
    },[formattedDate])*/
    return (
        <div className='lg:mx-10'>
            <h1 className='text-secondary text-center text-2xl font-bold'>Available Appointment on: {format(date,"PP")}</h1>
        
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4'>
          {services?.map(service=><AppointmentServices
           service={service}
           setAppointment={setAppointment}
           key={service._id} >

           </AppointmentServices>)}
           {
               appointment && <AppointmentModal refetch={refetch} date={date} appointment={appointment} setAppointment={setAppointment}></AppointmentModal>
           }
          </div>
        </div>
    );
};

export default AvailableAppointment;