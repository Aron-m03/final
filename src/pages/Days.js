// src/Days.js

import React, { useState } from 'react';

const Days = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleCheckboxChange = (event) => {
    const day = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedDays([...selectedDays, day]);
    } else {
      setSelectedDays(selectedDays.filter(d => d !== day));
    }
  };

  return (
    <div>
      <h2>Select Days</h2>
      <div>
        {[1, 2, 3, 4, 5].map(day => (
          <label key={day}>
            <input
              type="checkbox"
              value={day}
              onChange={handleCheckboxChange}
              checked={selectedDays.includes(day)}
            />
            Day {day}
          </label>
        ))}
      </div>
      <div>
        <h3>Selected Days</h3>
        {selectedDays.length > 0 ? (
          <ul>
            {selectedDays.map(day => (
              <li key={day}>Day {day}</li>
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
