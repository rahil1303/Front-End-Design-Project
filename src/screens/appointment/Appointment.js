import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import RateAppointment from './RateAppointment';
import './Appointment.css';

function Appointment({ isLoggedIn }) {
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const mockAppointments = [
        { id: 1, doctorName: "Dr. John Doe", date: "2023-08-15", time: "10:00 AM", symptoms: "Cough, Cold" },
        { id: 2, doctorName: "Dr. Jane Smith", date: "2023-08-16", time: "11:00 AM", symptoms: "Chest Pain" },
        { id: 3, doctorName: "Dr. Ocean Garner", date: "2023-08-17", time: "12:00 PM", symptoms: "Black Skin" },
        // ... add more mock appointments as needed
    ];

    const handleRateClick = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleCloseRate = () => {
        setSelectedAppointment(null);
    };

    if (!isLoggedIn) {
        return <div className="appointments-container">Please Login to Book an Appointment</div>;
    }

    return (
        <div className="appointments-container">
            {mockAppointments.map(appointment => (
                <Card key={appointment.id} className="appointment-card">
                    <CardContent>
                        <Typography variant="h6">{appointment.doctorName}</Typography>
                        <Typography variant="body2">Date: {appointment.date}</Typography>
                        <Typography variant="body2">Time: {appointment.time}</Typography>
                        <Typography variant="body2">Symptoms: {appointment.symptoms}</Typography>
                    </CardContent>
                    <Button variant="contained" color="primary" onClick={() => handleRateClick(appointment)}>
                        Rate Appointment
                    </Button>
                </Card>
            ))}
            {selectedAppointment && <RateAppointment appointment={selectedAppointment} onClose={handleCloseRate} />}
        </div>
    );
}

export default Appointment;
