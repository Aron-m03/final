import React from 'react';

const ExerciseOptions = ({ options, selectedOption, onSelectOption, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {options.map(option => (
        <label key={option.name}>
          <input
            type="radio"
            value={option.name}
            checked={selectedOption === option.name}
            onChange={() => onSelectOption(option.name)}
          />
          {option.name}
        </label>
      ))}
    </div>
  );
};

export default ExerciseOptions;
