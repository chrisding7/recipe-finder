import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({id, recipeDetails}) => {
  
  
 
  return (
    <div className="recipe-card">
      <h3>{recipeDetails.recipe.label}</h3>
      <img src={recipeDetails.recipe.image} alt={recipeDetails.recipe.label}/>
      <Link to={`/recipes/${id}`}>
        <button className="recipe-button">View Recipe</button>
      </Link>
      <button className="favorite-button">Add to Favorites</button>
    </div>
  )
}

export default RecipeCard