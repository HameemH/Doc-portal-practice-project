import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const Makeappointment = () => {
    return (
        <section className='flex justify-center items-center lg:m-10 m-5 px-3  ' style={{background:`url(${appointment})`}} >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                
                <h3 className='text-primary text-xl'>Appointment</h3>
                <h1 className=' text-3xl text-white'>Make an appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>

               
            </div>
        </section>
    );
};

export default Makeappointment;