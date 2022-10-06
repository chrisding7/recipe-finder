import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipeData }) => {
const [favorites, setFavorites] = useState([]);

//get data from favorites saved to db.json
  useEffect(() => {
    fetch(`https://fake-server-hosting.herokuapp.com/favorites`)
    .then(res => res.json())
    .then(data => {
      setFavorites(data)
    })
    .catch(console.error)
  }, [])

  const faveIds = favorites.map(fav => {
    return fav.uri.slice(-32)
  })

  const renderRecipes = recipeData.map(recipe => {
    const id = recipe.recipe.uri.slice(-32)
    //compare id to each element in faveIds, if id === faveId set isFavorited to true
    const checkFavoriteId = faveIds.find((faveId) => faveId === id); //return one faveId if true

    return (
      <RecipeCard key={id} id={id} recipeDetails={recipe} checkFavoriteId={checkFavoriteId}/>
    )
  })

  return (
    <div className="recipe-list">
      {renderRecipes}
    </div>
  )
}

export default RecipeList