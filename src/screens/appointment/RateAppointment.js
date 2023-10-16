import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

function RateAppointment({ appointment, onClose }) {
    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Rate Appointment</DialogTitle>
            <DialogContent>
                <Typography variant="h6">{appointment.doctorName}</Typography>
                <Rating name="rate-appointment" />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RateAppointment;
