// src/home/Home.jsx
import React from "react";
import './doctor.css';
import { NavLink } from 'react-router-dom';
import applogo from '../applogo.png';

const DoctorDashBoard = () => {
    return (
        <div className="maindiv">
            <div className="header">
                <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
            </div>
            <nav>
                <img src={applogo} alt="applogo" />
                <div className="navbar">
                    <NavLink to='/Home' className="nav-link">Home</NavLink>
                  
                    
                    <NavLink to='/DoctorAppointments' className="nav-link">Appointments</NavLink>
                    <NavLink to='/Home' className="nav-link">Logout</NavLink>
                </div>
            </nav>
            <div className="dataa">

            </div>
            <div className="footer">copyright@symptomsdiseasepredictor2024</div>
        </div>
    );
}

export default DoctorDashBoard;
