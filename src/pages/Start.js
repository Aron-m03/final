
import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <h1>Let's start your fitness journey</h1>
      <Link to="/nutrition">Start</Link>
    </div>
  );
};

export default Start;
