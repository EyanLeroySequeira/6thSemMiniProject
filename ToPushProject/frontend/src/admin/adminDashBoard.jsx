// src/home/Home.jsx
import React from "react";
import './admin.css';
import { NavLink } from 'react-router-dom';
import applogo from '../applogo.png';

const AdminDashboard = () => {
    return (
        <div className="maindiv">
            <div className="header">
                <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
            </div>
            <nav>
                <img src={applogo} alt="applogo" />
                <div className="navbar">
                    
                    <NavLink to='/PatientRecord' className="nav-link">Patients</NavLink>
                    <NavLink to='/DoctorRecord' className="nav-link">Doctors</NavLink>
                    <NavLink to='/MlRecord' className="nav-link">ML Evaluations</NavLink>
                    <NavLink to='/Home' className="nav-link">Logout</NavLink>
                </div>
            </nav>
            <div className="dataa">
           
            </div>
            <div className="footer">copyright@symptomsdiseasepredictor2024</div>
        </div>
    );
}

export default AdminDashboard;
