import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Modal, Tabs, Tab, Box, Typography } from '@material-ui/core';
import logo from '../../assets/logo.jpeg';
import Login from '../../screens/login/Login'; 
import Register from '../../screens/register/Register'; 
import './Header.css';

function Header({ isLoggedIn, setIsLoggedIn }) { // Receive the props here
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="logo">
                    <img src={logo} alt="Logo" className="logo" />
                </IconButton>
                <span className="header-title">Doctor Finder</span>
                <div className="spacer"></div> {/* Spacer div to push content to the right */}
                <Button 
                    variant="contained" 
                    color={isLoggedIn ? "secondary" : "primary"}
                    onClick={() => {
                        if (isLoggedIn) {
                            setIsLoggedIn(false);
                        } else {
                            setOpenModal(true);
                        }
                    }}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </Button>
            </Toolbar>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="login-registration-modal"
                className="modal-container"
            >
                <Box className="modal-box">
                    <Typography variant="h6" className="modal-header">Authentication</Typography>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Login and Registration tabs">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <div className="modal-content">
                        {selectedTab === 0 && <Login setIsLoggedIn={setIsLoggedIn} />} {/* Pass the setIsLoggedIn function to Login */}
                        {selectedTab === 1 && <Register />}
                    </div>
                </Box>
            </Modal>
        </AppBar>
    );
}

export default Header;
