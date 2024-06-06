import React from 'react';
import exercises from './data';

const Results = ({ selectedOptions }) => {
  const { gender, ageGroup, exercise } = selectedOptions;
  const exerciseDetails = exercises[gender][ageGroup].find(ex => ex.name === exercise);

  if (!exerciseDetails) {
    return <div>No exercise selected</div>;
  }

  return (
    <div>
      <h2>Summary of Selected Exercise</h2>
      <p>Gender: {gender}</p>
      <p>Age Group: {ageGroup}</p>
      <p>Exercise: {exercise}</p>
      <p>Target Muscles: {exerciseDetails.targetMuscles.join(', ')}</p>
      <p>Reps: {exerciseDetails.reps}</p>
    </div>
  );
};

export default Results;
