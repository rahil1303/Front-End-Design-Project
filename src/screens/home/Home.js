import React from 'react';
import DoctorList from '../doctorList/DoctorList';  // Import the DoctorList component

const Home = ({ isLoggedIn }) => {  // Accept the isLoggedIn prop
    return (
        <div>
            <DoctorList isUserLoggedIn={isLoggedIn} />  {/* Pass the isLoggedIn prop to DoctorList */}
        </div>
    );
};

export default Home;
