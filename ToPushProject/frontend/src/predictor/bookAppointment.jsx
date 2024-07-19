import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import applogo from '../applogo.png';
import './BookAppointment.css';

const BookAppointment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { doctor } = location.state || {};

    if (!doctor) {
        return <div>No doctor selected</div>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const appointmentDate = event.target.appointmentDate.value;
        const patientName = event.target.patientName.value;
    
        try {
            // Fetch user data by patient name
            const userResponse = await fetch(`http://localhost:3000/api/v1/users?name=${patientName}`);
            const users = await userResponse.json();
          console.log('Fetched users:', users);
            if (!users.length) {
                console.error('Patient not found');
                return;
            }

            
            const doctorResponse =await fetch(`http://localhost:3000/api/v1/doctors?name=${doctor.name}`);
            const doctors = await doctorResponse.json();
            console.log('Fetched doctors:',doctors)

            
            

            const user = users[0];
            const userId = user._id;
    
            const newAppointment = {
                doctorName: doctor.name,
                date: appointmentDate,
                status: 'Pending'
            };

            const newAppointment1 ={
                patientName: user.name,
                date: appointmentDate,
                status:'Pending'
            }

    
            let updatedAppointments;
            if (user.appointmentRequests) {
                updatedAppointments = [...user.appointmentRequests, newAppointment];
            } else {
                updatedAppointments = [newAppointment];
            }

            let updatedAppointments1;
            if (doctor.appointmentRequests) {
                updatedAppointments1 = [...doctor.appointmentRequests, newAppointment1];
            } else {
                updatedAppointments1 = [newAppointment1];
            }

            // Update the user's appointment data
            const updateResponse = await fetch(`http://localhost:3000/api/v1/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    appointmentRequests: updatedAppointments
                }),
            });

            const updateResponse1 = await fetch(`http://localhost:3000/api/v1/doctors/${doctor._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    appointmentRequests: updatedAppointments1
                }),
            });

    
            if (updateResponse.ok && updateResponse1.ok) {
                // Navigate to the user's appointments page with appointment details
                navigate('/UserAppointments', { state: newAppointment });
            } else {
                console.error('Failed to update appointment');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        <div className="maindiv1">
            <div className="header">
                <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
            </div>
            <nav>
                <img src={applogo} alt="applogo" />
                <div className="navbar">
                    <NavLink to='/Home' className="nav-link">Home</NavLink>
                    <NavLink to='/Predictor' className="nav-link">Predictor</NavLink>
                </div>
            </nav>
            <div className="appointment-form">
                <h1>Book Appointment with Dr. {doctor.name}</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Patient Name:
                        <input type="text" name="patientName" required />
                    </label>
                    <br />
                    <label>
                        Doctor Name:
                        <input type="text" name="doctorName" value={doctor.name} readOnly />
                    </label>
                    <br />
                    <label>
                        Specialization:
                        <input type="text" name="specialization" value={doctor.specialization} readOnly />
                    </label>
                    <br />
                    <label>
                        Appointment Date:
                        <input type="date" name="appointmentDate" required />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
