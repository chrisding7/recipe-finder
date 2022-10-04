import React from 'react';
import RecipeCard from './RecipeCard';
const RecipeList = ({ recipeData }) => {

const renderRecipes = recipeData.map(recipe => {
  const id = recipe.recipe.uri.slice(-32)
  
  return(
    <RecipeCard key={id} id={id} recipeDetails={recipe}/>
  )
})

  return (
    <div className="recipe-list">
      {renderRecipes}
    </div>
  )
}

export default RecipeList