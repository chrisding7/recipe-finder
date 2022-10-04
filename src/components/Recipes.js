import { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Search from './Search';

const Recipes = () => {
  const randomFoods = ['chicken', 'tasty', 'chocolate', 'pasta', 'fruit', 'beef']
  const randomIndex = Math.floor((Math.random() * randomFoods.length)); //return an integer from 0 to 5 (randomFoods.length-1)
  console.log(randomIndex)
  
  //state
  const [recipeData, setRecipeData] = useState([]);
  const [searchSubmit, setSearchSubmit] = useState(randomFoods[randomIndex]);
  const [nextRecipes, setNextRecipes] = useState('')


  // GET recipe data
  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchSubmit}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
        setNextRecipes(data["_links"].next.href);
        setRecipeData(data.hits) 
    })
    .then(console.error)

  },[searchSubmit])

  const showMoreRecipes = () => {
    fetch(nextRecipes)
    .then(res => res.json())
    .then(data => {
      
     setRecipeData([...recipeData, ...data.hits])
     //update nextRecipes href
     setNextRecipes(data["_links"].next.href);
      
    })
  }


  return (
    <div className='recipes'>
      <h1>Recipes</h1>
      <Search setSearchSubmit={setSearchSubmit}/>
      <RecipeList recipeData={recipeData}/>
      <button className="show-more-button" onClick={showMoreRecipes}>Show More</button>
    </div>
  )
}

export default Recipes