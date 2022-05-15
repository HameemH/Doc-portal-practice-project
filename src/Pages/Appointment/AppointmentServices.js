import React from 'react';

const AppointmentServices = (props) => {
    const {setAppointment, service} = props;

    const{name, slots} = service;
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-secondary">{name}</h2>
    <p>{
        slots?.length? <span>{slots[0]}</span>: <span className='text-red-500'>No slots Available</span>
        }</p>
    <p>{slots.length} slots available</p>
    <div className="card-actions justify-center">
      <label for="appointment-modal" onClick={()=>setAppointment(service)} disabled={slots.length===0} className="btn btn-secondary text-white ">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentServices;