import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './DoctorDetails.css'; // Importing the CSS file

function DoctorDetails({ doctor, isUserLoggedIn }) {
    const [openModal, setOpenModal] = useState(false);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        date: '',
        time: '',
        medicalHistory: '',
        symptoms: ''
    });

    const handleBookAppointment = () => {
        if (!isUserLoggedIn) {
            setOpenLoginModal(true);
        } else {
            setOpenModal(true);
        }
    };

    const handleConfirm = () => {
        setOpenModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleViewDetails = () => {
        setOpenDetailsModal(true);
    };

    const getDoctorDescription = (specialty) => {
        switch (specialty) {
            case "Cardiology":
                return "Cardiologists specialize in diagnosing and treating diseases or conditions of the heart and blood vessels.";
            case "Dermatology":
                return "Dermatologists are experts in the care of normal skin, as well as in the prevention and treatment of a wide variety of skin conditions.";
            case "Pulmonologist":
                return "Pulmonologists diagnose and treat conditions that affect the respiratory system in men and women.";
            case "General_Physician":
                return "General physicians are responsible for the diagnosis, treatment, and care of adults across the spectrum from health to complex illness.";
            default:
                return "Specialist in the medical field.";
        }
    };

    return (
        <Card className="doctor-card custom-card">
            <CardContent>
                <Typography variant="h5" component="div">
                    Doctor Name: {doctor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Specialty: {doctor.specialty}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="span">
                    Rating: 
                </Typography>
                <Rating name="read-only" value={doctor.rating} readOnly />
            </CardContent>
            <Button variant="contained" color="primary" onClick={handleBookAppointment}>
                Book Appointment
            </Button>
            <Button variant="outlined" color="primary" className="view-details-btn" onClick={handleViewDetails}>
                View Details
            </Button>

            <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                <DialogTitle className="purple-stripe">Book An Appointment</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phoneNumber"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        label="Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="time"
                        label="Time"
                        type="time"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={formData.time}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="medicalHistory"
                        label="Medical History"
                        type="text"
                        fullWidth
                        value={formData.medicalHistory}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="symptoms"
                        label="Symptoms"
                        type="text"
                        fullWidth
                        value={formData.symptoms}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDetailsModal} onClose={() => setOpenDetailsModal(false)}>
                <DialogTitle className="purple-stripe">Doctor Details</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">{doctor.name}</Typography>
                    <Typography variant="body1">Specialty: {doctor.specialty}</Typography>
                    <Typography variant="body2">
                        {getDoctorDescription(doctor.specialty)}
                    </Typography>
                    <Typography variant="body2">Total Experience: 10 years</Typography> {/* Dummy data */}
                    <Typography variant="body2">Date of Birth: 01/01/1980</Typography> {/* Dummy data */}
                    <Typography variant="body2">City: New York</Typography> {/* Dummy data */}
                    <Typography variant="body2">Email: doctor@example.com</Typography> {/* Dummy data */}
                    <Typography variant="body2">Mobile: +1 123-456-7890</Typography> {/* Dummy data */}
                    <Typography variant="body2" component="span">Rating: </Typography>
                    <Rating name="read-only-details" value={doctor.rating} readOnly />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDetailsModal(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
                <DialogTitle>Information</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Please login to book an appointment.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenLoginModal(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default DoctorDetails;
