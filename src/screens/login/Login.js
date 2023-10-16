import React, { useState } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import './Login.css';

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const handleLogin = () => {
        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Basic validation
        if (!email) setEmailError('Please fill out this field');
        else if (!emailPattern.test(email)) setEmailError('Enter a valid email address');
        if (!password) setPasswordError('Please fill out this field');

        if (!emailError && !passwordError) {
            // Mock successful login
            console.log('Logged in successfully');
            setIsLoggedIn(true);  // Set the user as logged in
            navigate('/');  // Navigate to the home page using useNavigate
        }
    };

    return (
        <Paper elevation={3} className="login-container">
            <TextField
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                fullWidth
                required
            />
            <TextField
                id="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                fullWidth
                required
            />
            <Button variant="contained" color="primary" className="login-button" onClick={handleLogin}>
                LOGIN
            </Button>
        </Paper>
    );
}

export default Login;
