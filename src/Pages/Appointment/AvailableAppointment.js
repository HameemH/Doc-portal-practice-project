import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h1 className='text-secondary text-center text-2xl font-bold'>Available Appointment on: {format(date,"PP")}</h1>
        </div>
    );
};

export default AvailableAppointment;