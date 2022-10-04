import React from 'react';
import FavoriteCard from './FavoriteCard';

const FavoriteList = ({favorites, onDelete}) => {
  
  const renderFavorites = favorites.map(favorite => {
    const recipeLinkId = favorite.uri.slice(-32)
    return(
      <FavoriteCard key={favorite.id} recipeLinkId={recipeLinkId} recipeDetails={favorite} onDelete={onDelete}/>
    )
  })
  
    return (
      <div className="recipe-list">
        {renderFavorites}
      </div>
    )
}

export default FavoriteList