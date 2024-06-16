// Home.js
import React, { useState } from 'react';
import { Gender } from './Gender';
import Age from './Age';
import ExerciseOptions from './ExerciseOptions';
import Results from './Results'; // Ensure this is the updated Results component
import Days from './Days';
import "./Home.css";
import exercises from './exercises.json';

const Home = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    gender: 'male',
    ageGroup: 'children',
    primaryMuscles: [],
    days: []
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelectGender = (gender) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      gender,
      primaryMuscles: []
    }));
  };

  const handleSelectAgeGroup = (ageGroup) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      ageGroup,
      primaryMuscles: []
    }));
  };

  const handleSelectPrimaryMuscles = (muscle) => {
    setSelectedOptions(prevState => {
      const primaryMuscles = prevState.primaryMuscles.includes(muscle)
        ? prevState.primaryMuscles.filter(m => m !== muscle)
        : [...prevState.primaryMuscles, muscle];
      return { ...prevState, primaryMuscles };
    });
  };

  const handleSelectDays = (days) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      days
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const allPrimaryMuscles = [
    ...new Set(exercises.exercises.flatMap(exercise => exercise.primaryMuscles))
  ];

  const filteredExercises = exercises.exercises.filter(exercise =>
    selectedOptions.primaryMuscles.some(muscle =>
      exercise.primaryMuscles.includes(muscle)
    )
  );

  return (
    <div className="container">
      <h1>Choose Your Exercise</h1>
      {!submitted ? (
        <>
          <div className="gender">
            <Gender selectedGender={selectedOptions.gender} onSelectGender={handleSelectGender} />
          </div>
          <div className="age">
            <Age selectedAgeGroup={selectedOptions.ageGroup} onSelectAgeGroup={handleSelectAgeGroup} />
          </div>
          <div className="exercise-options">
            <h2>Select Primary Muscles</h2>
            {allPrimaryMuscles.map(muscle => (
              <label key={muscle}>
                <input
                  type="checkbox"
                  value={muscle}
                  checked={selectedOptions.primaryMuscles.includes(muscle)}
                  onChange={() => handleSelectPrimaryMuscles(muscle)}
                />
                {muscle}
              </label>
            ))}
          </div>
          <div className="days">
            <Days selectedDays={selectedOptions.days} onSelectDays={handleSelectDays} />
          </div>
          <button className="button" onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <Results selectedOptions={selectedOptions} exercises={filteredExercises} />
      )}
    </div>
  );
};

export default Home;
