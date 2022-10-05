import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-info'>
        <h1>Recipe Finder</h1>
        <p>Thousands of recipes one click away!</p>
        <Link to='/recipes'>
          <button>Explore Recipes</button>
        </Link>
      </div>
    </div>
  )
}

export default Home