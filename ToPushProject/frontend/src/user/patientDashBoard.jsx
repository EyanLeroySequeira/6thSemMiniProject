import React from "react";
import './patient.css';
import { NavLink, useNavigate } from 'react-router-dom';
import applogo from '../applogo.png';

const PatientDashBoard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the user ID from localStorage
        localStorage.removeItem('user_id');
        
        // Navigate to the Home page
        navigate('/Home');
    };

    return (
        <div className="maindiv">
            <div className="header">
                <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
            </div>
            <nav>
                <img src={applogo} alt="applogo" />
                <div className="navbar">
                    <NavLink to='/PatientDashBoard' className="nav-link">PatientDashboard</NavLink>
                    <NavLink to='/Predictor' className="nav-link">Predictor</NavLink>
                    <NavLink to='/Appointments' className="nav-link">Appointments</NavLink>
                    <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
                </div>
            </nav>
            <div className="dataa">

            </div>
            <div className="footer">copyright@symptomsdiseasepredictor2024</div>
        </div>
    );
}

export default PatientDashBoard;
