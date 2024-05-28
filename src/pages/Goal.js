import React from 'react';

export const Goal = () => {
  return (
    <div>
      <h1>Select your goal</h1>
      <input type="radio" id="muscle" name="goal" value="muscle" />
      <label htmlFor="muscle">Gaining muscle</label>
      <input type="radio" id="strength" name="goal" value="strength" />
      <label htmlFor="strength">Gaining strength</label>
      <input type="radio" id="fat" name="goal" value="fat" />
      <label htmlFor="fat">Burning fat</label>
      <input type="submit" value="Submit" />
    </div>
  );
};
0