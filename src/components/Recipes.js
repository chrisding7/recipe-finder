import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Search from './Search';

const Recipes = () => {
  //state
  const [recipeData, setRecipeData] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState('chocolate');


  // GET recipe data
  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchSubmit}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.hits)
        setRecipeData(data.hits.slice(0,5)) 
    })
    .then(console.error)

  },[searchSubmit])


  return (
    <div className='recipes'>
      Recipes
      <Search setSearchSubmit={setSearchSubmit}/>
      <RecipeList recipeData={recipeData}/>
    </div>
  )
}

export default Recipes