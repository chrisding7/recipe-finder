import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipeData }) => {

const renderRecipes = recipeData.map(recipe => {
  const recipeId = recipe.recipe.ingredients.map(ing => ing.foodId);
  return(
    <RecipeCard key={recipeId} recipeDetails={recipe}/>
  )
})

  return (
    <div className="recipe-list">
      {renderRecipes}
    </div>
  )
}

export default RecipeList