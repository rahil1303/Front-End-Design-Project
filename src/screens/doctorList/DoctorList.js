import React, { useState } from 'react';
import DoctorDetails from './DoctorDetails';
import { Select, MenuItem, FormControl, InputLabel, Tabs, Tab } from '@material-ui/core';
import './DoctorList.css';
import Appointment from '../appointment/Appointment';

const DoctorList = ({ isUserLoggedIn }) => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [currentTab, setCurrentTab] = useState(0);

    const doctors = [
        { id: 1, name: "Dr. John Doe", specialty: "Cardiology", rating: 2 },
        { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology", rating: 3 },
        { id: 3, name: "Dr. Ocean Garner", specialty: "Pulmonologist", rating: 3 },
        { id: 4, name: "Dr. Keenan Hess", specialty: "General_Physician", rating: 3 },
        { id: 5, name: "Dr. Blossam Valentine", specialty: "Pulmonologist", rating: 3 },
    ];

    const filteredDoctors = selectedSpecialty 
        ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
        : doctors;

    return (
        <div className="doctor-list-container">
            <Tabs 
                value={currentTab} 
                onChange={(event, newValue) => setCurrentTab(newValue)}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Doctor" />
                <Tab label="Appointment" />
            </Tabs>

            {currentTab === 0 && (
                <>
                    <FormControl variant="outlined" className="specialty-dropdown">
                        <InputLabel>Select Speciality</InputLabel>
                        <Select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            label="Select Speciality"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Cardiology">Cardiology</MenuItem>
                            <MenuItem value="Dermatology">Dermatology</MenuItem>
                            <MenuItem value="Pulmonologist">Pulmonologist</MenuItem>
                            <MenuItem value="General_Physician">General Physician</MenuItem>
                        </Select>
                    </FormControl>

                    {filteredDoctors.map(doctor => (
                        <DoctorDetails key={doctor.id} doctor={doctor} isUserLoggedIn={isUserLoggedIn} />
                    ))}
                </>
            )}

            {currentTab === 1 && <Appointment />}
        </div>
    );
};

export default DoctorList;
