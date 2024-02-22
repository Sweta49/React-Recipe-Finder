import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './components/Detail';
import RecipeList from './components/RecipeList';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (query.trim() === '') return; 
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, [query]);

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Recipe Finder</h1>
        <div className="input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a meal..."
          />
        </div>
      </div>
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeList recipes={recipes} onViewDetail={handleViewDetail} />
      )}
    </div>
  );
}
export default App;
