
import React from 'react';

function RecipeList({ recipes, onViewDetail }) {
  return (
    <div>
      <h1>Recipes</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} className="recipe-item">
            <div>
              <h3>{recipe.strMeal}</h3>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
              <p>Category: {recipe.strCategory}</p>
            </div>
            <button onClick={() => onViewDetail(recipe)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
