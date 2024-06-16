// Results.js
import React, { useState } from 'react';

const Results = ({ selectedOptions, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercisesPerPage = 10;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfFirstExercise + exercisesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="results">
      <h2>Exercise Results</h2>
      {selectedExercise ? (
        <div className="exercise-details">
          <button onClick={() => setSelectedExercise(null)}>Back to List</button>
          <h3>{selectedExercise.name}</h3>
          <p><strong>Instructions:</strong> {selectedExercise.instructions}</p>
          <p><strong>Force:</strong> {selectedExercise.force}</p>
          <p><strong>Equipment:</strong> {selectedExercise.equipment}</p>
          <p><strong>Category:</strong> {selectedExercise.category}</p>
        </div>
      ) : (
        <ul>
          {currentExercises.map((exercise, index) => (
            <li key={index} onClick={() => handleExerciseClick(exercise)}>
              <h3>{exercise.name}</h3>
              <p>Primary Muscles: {exercise.primaryMuscles.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
      {!selectedExercise && (
        <Pagination
          exercisesPerPage={exercisesPerPage}
          totalExercises={exercises.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

const Pagination = ({ exercisesPerPage, totalExercises, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Results;
