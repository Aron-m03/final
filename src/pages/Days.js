// src/Days.js

import React, { useState, useEffect } from 'react';

const Days = ({ selectedDays, onSelectDays }) => {
  const [localSelectedDays, setLocalSelectedDays] = useState(selectedDays);

  useEffect(() => {
    setLocalSelectedDays(selectedDays);
  }, [selectedDays]);

  const handleCheckboxChange = (event) => {
    const day = parseInt(event.target.value);
    let updatedDays;
    if (event.target.checked) {
      updatedDays = [...localSelectedDays, day];
    } else {
      updatedDays = localSelectedDays.filter(d => d !== day);
    }
    setLocalSelectedDays(updatedDays);
    onSelectDays(updatedDays);
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
      <h2>Select Days</h2>
      <div>
        {daysOfWeek.map((day, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={index}
              onChange={handleCheckboxChange}
              checked={localSelectedDays.includes(index)}
            />
            {day}
          </label>
        ))}
      </div>
      <div>
        <h3>Selected Days</h3>
        {localSelectedDays.length > 0 ? (
          <ul>
            {localSelectedDays.map(day => (
              <li key={day}>{daysOfWeek[day]}</li>
            ))}
          </ul>
        ) : (
          <p>No days selected.</p>
        )}
      </div>
    </div>
  );
};

export default Days;
