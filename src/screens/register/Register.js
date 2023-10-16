import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const isValidEmail = (email) => {
        // Simple regex to validate email format
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleRegister = () => {
        // Reset errors
        setErrors({});

        // Basic validation
        if (!name) setErrors(prev => ({ ...prev, name: 'Please fill out this field' }));
        if (!email) setErrors(prev => ({ ...prev, email: 'Please fill out this field' }));
        else if (!isValidEmail(email)) setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
        if (!password) setErrors(prev => ({ ...prev, password: 'Please fill out this field' }));
        if (password !== confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));

        if (!errors.name && !errors.email && !errors.password && !errors.confirmPassword) {
            // Mock successful registration
            console.log('Registered successfully');
            // TODO: Add API call here
        }
    };

    return (
        <div className="register-container">
            <FormControl required className="form-control">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    aria-describedby="name-error-text" 
                />
                <FormHelperText id="name-error-text" error>{errors.name}</FormHelperText>
            </FormControl>
            <FormControl required className="form-control">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    aria-describedby="email-error-text" 
                />
                <FormHelperText id="email-error-text" error>{errors.email}</FormHelperText>
            </FormControl>
            <FormControl required className="form-control">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    aria-describedby="password-error-text" 
                />
                <FormHelperText id="password-error-text" error>{errors.password}</FormHelperText>
            </FormControl>
            <FormControl required className="form-control">
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input 
                    id="confirmPassword" 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    aria-describedby="confirmPassword-error-text" 
                />
                <FormHelperText id="confirmPassword-error-text" error>{errors.confirmPassword}</FormHelperText>
            </FormControl>
            <Button variant="contained" color="primary" className="register-button" onClick={handleRegister}>
                REGISTER
            </Button>
        </div>
    );
}

export default Register;
