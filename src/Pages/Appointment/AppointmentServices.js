import React from 'react';

const AppointmentServices = (props) => {
    const{name, slots} = props.service
    console.log(name);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-secondary">{name}</h2>
    <p>{
        slots.length? <span>{slots[0]}</span>: <span className='text-red-500'>No slots Available</span>
        }</p>
    <p>{slots.length} slots available</p>
    <div class="card-actions justify-center">
      <button disabled={slots.length===0} class="btn btn-secondary text-white ">Book Appointment</button>
    </div>
  </div>
</div>
    );
};

export default AppointmentServices;