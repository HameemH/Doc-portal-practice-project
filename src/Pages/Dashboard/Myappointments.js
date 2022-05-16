import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';

const Myappointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=> res.json())
        .then(data =>setAppointments(data))
        }
    },[user])
    return (
        <div>
        <h2>My Appointments: {appointments.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.name}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Myappointments;