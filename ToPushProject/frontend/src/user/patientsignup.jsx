// import React, { useState } from "react";
// import './patient.css';
// import { NavLink, useNavigate } from 'react-router-dom';
// import applogo from '../applogo.png';
// import axios from 'axios';

// const Patient = () => {
//     const navigate = useNavigate();
//     const [name, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3000/api/v1/users/login', {
//                 name,
//                 password
//             });

//             if (response.status === 200) {
//                 navigate('/PatientDashboard');
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             setErrorMessage('Invalid username or password. Please try again.');
//         }
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
//                     <NavLink to='/Admin' className="nav-link">User</NavLink>
//                     <NavLink to='/Patientnew' className="nav-link">Sign Up</NavLink>
//                 </div>
//             </nav>
//             <div className="container">
//                 <div className="breadcrumb">
//                     <a href="/Home">Home</a>
//                     <a href="/Admin">User Login</a>
//                 </div>
//                 <h2>User Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="username">User Name:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={name}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="submit-btn">Login</button>
//                 </form>
//                 {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             </div>
//             <div style={{ padding: '20px', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
//                 copyright@symptomsdiseasepredictor2024
//             </div>
//         </div>
//     );
// };

// export default Patient;
import React, { useState } from "react";
import './patient.css';
import { NavLink, useNavigate } from 'react-router-dom';
import applogo from '../applogo.png';
import axios from 'axios';

const Patient = () => {
    const navigate = useNavigate();
    const [name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/login', {
                name,
                password
            });

            if (response.status === 200) {
                // Extract userId from the response
                const userId = response.data.userId;

                // Store userId in localStorage
                localStorage.setItem('user_id', userId);

                // Navigate to PatientDashboard or any other route
                navigate('/PatientDashboard');
            } else {
                console.error('Login failed:', response.data.message);
                setErrorMessage('Invalid username or password. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid username or password. Please try again.');
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
                    <NavLink to='/Admin' className="nav-link">User</NavLink>
                    <NavLink to='/Patientnew' className="nav-link">Sign Up</NavLink>
                </div>
            </nav>
            <div className="container">
                <div className="breadcrumb">
                    <a href="/Home">Home</a>
                    <a href="/Admin">User Login</a>
                </div>
                <h2>User Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                            required
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
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div style={{ padding: '20px', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
                copyright@symptomsdiseasepredictor2024
            </div>
        </div>
    );
};

export default Patient;
