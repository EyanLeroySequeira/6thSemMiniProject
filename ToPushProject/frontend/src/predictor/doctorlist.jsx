import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './DoctorList.css';
import { NavLink } from 'react-router-dom';
import applogo from '../applogo.png';
import { useNavigate } from 'react-router-dom';
const DoctorList = () => {
    const location = useLocation();
    const { city } = location.state;
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/doctors?city=${city}`)
            .then((response) => {
                console.log('Full API Response:', response);
                if (response.data && Array.isArray(response.data)) {
                    setDoctors(response.data);
                } else {
                    console.error('Response data format:', response.data);
                    setError('Invalid response format');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching doctors:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [city]);

    // const handleBookAppointment = (doctorId) => {
    //     // Implement your booking logic here, e.g., redirect to a booking page
    //     console.log(`Booking appointment for doctor with ID: ${doctorId}`);
    //     // Example: navigate to a booking page with doctorId as parameter
    //     // history.push(`/book-appointment/${doctorId}`);
    // };
    

// Inside your component
    const navigate = useNavigate();

        const handleBookAppointment = (doctor) => {
            navigate('/BookAppointment', { state: { doctor } });
        };


    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
            <div className="doctor-list">
                <h1>Doctors in {city}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Qualifications</th>
                            <th>Specialization</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor._id}>
                                <td>{doctor.name}</td>
                                <td>{doctor.gender}</td>
                                <td>{doctor.qualifications}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.mobile}</td>
                                <td>
                                    <button onClick={() => handleBookAppointment(doctor)}>
                                        Book Appointment
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorList;
