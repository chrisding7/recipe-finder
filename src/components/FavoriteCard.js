import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteCard = ({recipeLinkId, recipeDetails, onDelete}) => {

  const handleDelete = (id) => {
    //delete from db
    fetch(`http://localhost:3001/favorites/${id}`, {
    method: 'DELETE'
    })
    .then(onDelete(id))
  }

  return (
    <div className="recipe-card">
      <h3>{recipeDetails.label}</h3>
      <img src={recipeDetails.image} alt={recipeDetails.label}/>
      <Link to={`/recipes/${recipeLinkId}`}>
        <button className="recipe-button">View Ingredients</button>
      </Link>
      <button className="favorite-button" onClick={() => handleDelete(recipeDetails.id)}>Remove From Favorites</button>
    </div>
  )
}

export default FavoriteCard