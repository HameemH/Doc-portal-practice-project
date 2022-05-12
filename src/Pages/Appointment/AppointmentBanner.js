import React, { useState } from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({date, newDate}) => {
    return (
        <div className="hero min-h-screen bg-white-200 " style={{
            background: `url(${bg})`,}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div className='drop-shadow-md bg-white rounded-lg'>
            <DayPicker
            mode="single"
            selected={date}
            onSelect={newDate}
            ></DayPicker>
            <p className='text-center'>You have selected:</p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;