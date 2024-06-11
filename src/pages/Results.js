// src/Results.js

import React from 'react';
import Calendar from './Calendar';

const Results = ({ selectedOptions }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Gender: {selectedOptions.gender}</p>
      <p>Age Group: {selectedOptions.ageGroup}</p>
      <p>Exercise: {selectedOptions.exercise}</p>
      <Calendar selectedDays={selectedOptions.days} />
    </div>
  );
};

export default Results;
