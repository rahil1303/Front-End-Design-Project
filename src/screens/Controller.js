import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/header/Header";
import Home from "./home/Home";
import Login from "./login/Login";
import Appointments from "./appointment/Appointment"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home baseUrl="/api/v1/" isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : null} />
          <Route path="/appointments" element={<Appointments isLoggedIn={isLoggedIn} />} /> 
          {/* Passing isLoggedIn prop to Appointments component */}
        </Routes>
      </div>
    </div>
  );
};

const Controller = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Controller;
