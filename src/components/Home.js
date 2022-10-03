import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Recipe Finder</h1>
      <p>Project Description</p>
      <Link to='/recipes'>
        <button>Search Recipes</button>
      </Link>
    </div>
  )
}

export default Home