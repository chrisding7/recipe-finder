import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({id, recipeDetails, checkFavoriteId}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  
  //check to see if something is already favorited
  if (checkFavoriteId && isFavorited === false) {
    setIsFavorited(true);
  } 

  //handle actual add-to-favorites button
  const handleFavorite = () => {
    if (!isFavorited) {
      fetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          recipeDetails.recipe
        ),
      })
      
      setIsFavorited((isFavorited) => !isFavorited);
    }
  }

  const faveBtnClass = isFavorited ? "favorite-btn-active" : "favorite-btn";
 
  return (
    <div className="recipe-card">
      <h3>{recipeDetails.recipe.label}</h3>
      <img src={recipeDetails.recipe.image} alt={recipeDetails.recipe.label}/>
      <Link to={`/recipes/${id}`}>
        <button className="recipe-btn">View Ingredients</button>
      </Link>
      <button className={faveBtnClass} onClick={handleFavorite}>{isFavorited? " Favorited!" : "Add to Favorites"}</button>
    </div>
  )
}

export default RecipeCard