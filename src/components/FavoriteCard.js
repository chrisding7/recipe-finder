import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteCard = ({recipeLinkId, recipeDetails, onDelete}) => {

  const handleDelete = (id) => {
    //delete from db
    fetch(`https://fake-server-hosting.herokuapp.com/favorites/${id}`, {
    method: 'DELETE'
    })
    .then(onDelete(id))
  }

  return (
    <div className="recipe-card">
      <h3>{recipeDetails.label}</h3>
      <img src={recipeDetails.image} alt={recipeDetails.label}/>
      <Link to={`/recipes/${recipeLinkId}`}>
        <button className="recipe-btn">View Ingredients</button>
      </Link>
      <button className="favorite-btn" onClick={() => handleDelete(recipeDetails.id)}>Remove From Favorites</button>
    </div>
  )
}

export default FavoriteCard