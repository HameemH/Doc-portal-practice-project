import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({ appointment, date ,setAppointment}) => {
    const {name, slots} =appointment;
   const handleBooking = e =>{
       e.preventDefault()
       const treatment = appointment.name
       const slot =e.target.slot.value
       const name =e.target.name.value
       const email =e.target.email.value
       const phone =e.target.phone.value
       const bookingInfo ={slot,name,email, phone,treatment};
       console.log(bookingInfo);
       setAppointment(null)
   }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="appointment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-3 justify-items-center'>
                        <input type="text" disabled value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" placeholder="Your name" name="name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Phone" name='phone' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="" value='Submit' class="btn btn-accent w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;