import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';

const AppointmentModal = ({ appointment, date ,setAppointment,refetch}) => {
    const {name, slots,_id} =appointment;
    const [user] =useAuthState(auth);
    const formattedDate = format(date,"PP")
   const handleBooking =async e =>{
       e.preventDefault()
       const treatment = appointment.name;
       const slot =e.target.slot.value;
       const name =user?.displayName;
       const email =user?.email;
       const phone =e.target.phone.value;
       const bookingInfo ={
           treatmentId:_id,
           treatment:treatment,
           date:formattedDate,
           slot,
           name,
           email,
           phone
       };
       
      await fetch("http://localhost:5000/bookings",{
           method: "POST",
           headers:{
              "content-type": "application/json"
           },
           body: JSON.stringify(bookingInfo),
       })
       .then(res => res.json())
       .then(data=>{
        console.log(data);
        if(data.success == true){
            toast(`Appointment Booked Successfully on ${formattedDate} at ${slot} `)

        }
       else{
           toast(`You have already an appointment on ${data?.exists.date} for ${data?.exists.treatment} `)
       }
        refetch()
        setAppointment(null)
        console.log(data);

       })
   }

    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-y-3 justify-items-center'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot =><option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" placeholder="Your name" value={user?.displayName || ''}  name="name" disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Email" name='email' value={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Phone" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="" value='Submit' className="btn btn-accent w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;