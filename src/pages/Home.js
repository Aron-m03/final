import React, { useState } from 'react';
import { Gender } from './Gender';
import Age from './Age';
import ExerciseOptions from './ExerciseOptions';
import exercises from './data';
import Results from './Results';

const Home = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    gender: 'male',
    ageGroup: 'children',
    exercise: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelectGender = (gender) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      gender,
      exercise: ''
    }));
  };

  const handleSelectAgeGroup = (ageGroup) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      ageGroup,
      exercise: ''
    }));
  };

  const handleSelectExercise = (exercise) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      exercise
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const { gender, ageGroup } = selectedOptions;
  const options = exercises[gender][ageGroup];

  return (
    <div>
      <h1>Choose Your Exercise</h1>
      {!submitted ? (
        <>
          <Gender selectedGender={selectedOptions.gender} onSelectGender={handleSelectGender} />
          <Age selectedAgeGroup={selectedOptions.ageGroup} onSelectAgeGroup={handleSelectAgeGroup} />
          <ExerciseOptions
            options={options}
            selectedOption={selectedOptions.exercise}
            onSelectOption={handleSelectExercise}
            title={`Select an exercise for ${gender} ${ageGroup}`}
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <Results selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default Home;
