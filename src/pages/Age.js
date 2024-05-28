import React from 'react';

const Age = ({ selectedAgeGroup, onSelectAgeGroup }) => {
  const ageGroups = ['children', 'teenagers', 'adults', 'seniors'];

  return (
    <div>
      <label htmlFor="ageDropdown">Select Age Group:</label>
      <select id="ageDropdown" value={selectedAgeGroup} onChange={(e) => onSelectAgeGroup(e.target.value)}>
        {ageGroups.map((ageGroup) => (
          <option key={ageGroup} value={ageGroup}>
            {ageGroup.charAt(0).toUpperCase() + ageGroup.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Age;
