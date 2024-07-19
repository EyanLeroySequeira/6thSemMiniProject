// import React from "react";
// import './admin.css';
// import { NavLink, useNavigate } from 'react-router-dom';
// import applogo from '../applogo.png';


// const Admin = () => {
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Here you can add any form validation or data processing logic
//         navigate('/AdminDashboard');
//     };
//     return (
//         <div className="maindiv2">
//             <div className="header">
//                 <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
//             </div>
//             <nav>
//                 <img src={applogo} alt="applogo" />
//                 <div className="navbar">
//                     <NavLink to='/Home' className="nav-link">Home</NavLink>
//                     <NavLink to='/Admin' className="nav-link">Admin</NavLink>
                  
//                 </div>
//             </nav>
//             <div class="container">
//         <div class="breadcrumb">
//             <a href="/Home">Home</a>
//             <a href="/Admin">Admin Login</a>
//         </div>
//         <h2>Admin</h2>
//         <form onSubmit={handleSubmit}>
//             <div class="form-group">
//                 <label for="username">Admin Name:</label>
//                 <input type="text" id="username" name="username" />
//             </div>
//             <div class="form-group">
//                 <label for="password">Password:</label>
//                 <input type="password" id="password" name="password"/>
//             </div>
//             <button type="submit" class="submit-btn" >Submit</button>
//         </form>
//     </div>
//             <div style={{ padding: '20px', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>copyright@symptomsdiseasepredictor2024</div>


//         </div>
//     )

// }
// export default Admin;

import React, { useState } from "react";
import './admin.css';
import { NavLink, useNavigate } from 'react-router-dom';
import applogo from '../applogo.png';
import axios from 'axios';

const Admin = () => {
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/admins/login', {
                name,
                password
            });

            if (response.status === 200) {
                navigate('/AdminDashboard');
            }
        } catch (error) {
            setErrorMessage('Login failed. Please check your username and password.');
        }
    };

    return (
        <div className="maindiv2">
            <div className="header">
                <h1>SYMPTOMS BASED DISEASE PREDICTOR</h1>
            </div>
            <nav>
                <img src={applogo} alt="applogo" />
                <div className="navbar">
                    <NavLink to='/Home' className="nav-link">Home</NavLink>
                    <NavLink to='/Admin' className="nav-link">Admin</NavLink>
                </div>
            </nav>
            <div className="container">
                <div className="breadcrumb">
                    <a href="/Home">Home</a>
                    <a href="/Admin">Admin Login</a>
                </div>
                <h2>Admin</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Admin Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div style={{ padding: '20px', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                copyright@symptomsdiseasepredictor2024
            </div>
        </div>
    );
};

export default Admin;

