
import React from 'react';

function Detail({ recipe, onBack }) {
  return (
    
      <div className="recipe-details">
      <div className="back-button"></div>
      <button onClick={onBack}>Back</button>
      <h2>{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
          const ingredient = recipe[`strIngredient${index}`];
          const measure = recipe[`strMeasure${index}`];
          if (!ingredient) return null;
          return (
            <li key={index}>
              {ingredient} - {measure}
            </li>
          );
        })}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default Detail;
