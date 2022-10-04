import React, {useState , useEffect} from 'react';
import FavoriteList from './FavoriteList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/favorites`)
    .then(res => res.json())
    .then(data => {
      setFavorites(data)
    })
  }, [])

  const handleDeleteItem = (id) => {
    const newFavorites = favorites.filter((favorite) => {
      return favorite.id !== id;
    })
    setFavorites(newFavorites);
  }

  return (
    <div className="recipes">
      <h1>Favorites</h1>
      <FavoriteList favorites={favorites} onDelete={handleDeleteItem}/>
    </div>
  )
}

export default Favorites