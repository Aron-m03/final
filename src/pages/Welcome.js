// src/Welcome.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to the Exercise App</h1>
      <button className="start-button" onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Welcome;
