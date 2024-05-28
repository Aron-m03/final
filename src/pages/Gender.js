import React from 'react';

export const Gender = ({ selectedGender, onSelectGender }) => {
  return (
    <div>
      <h1>Select your gender</h1>
      <label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={selectedGender === 'male'}
          onChange={() => onSelectGender('male')}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={selectedGender === 'female'}
          onChange={() => onSelectGender('female')}
        />
        Female
      </label>
    </div>
  );
};
