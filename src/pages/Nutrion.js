import React, { useState } from 'react';
import axios from 'axios';
import "./Nutrition.css"

const Nutrition = () => {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'SFLLbUpXY/mQCqfimGIx7g==dxE5LOuYRNwgpw3x';
  const apiUrl = 'https://api.calorieninjas.com/v1/nutrition';

  const fetchNutritionData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiUrl, {
        headers: { 'X-Api-Key': apiKey },
        params: { query },
      });
      setNutritionData(response.data.items);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNutritionData();
  };

  return (
    <div>
      <h1>Nutrition Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a food item"
          required
        />
        <button type="submit">Get Nutrition Info</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {nutritionData && (
        <div>
          <h2>Nutrition Data</h2>
          <ul>
            {nutritionData.map((item, index) => (
              <li key={index}>
                <p><strong>Food:</strong> {item.name}</p>
                <p><strong>Calories:</strong> {item.calories}</p>
                <p><strong>Carbs:</strong> {item.carbohydrates_total_g} g</p>
                <p><strong>Protein:</strong> {item.protein_g} g</p>
                <p><strong>Fat:</strong> {item.fat_total_g} g</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
