import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullRecipe = () => {
  const [fullRecipe, setFullRecipe] = useState(null);
  const params = useParams();
  console.log(params)
  
  useEffect(() => {
    fetch(`https://api.edamam.com/api/recipes/v2/${params.id}?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}
    `)
    .then(res => res.json())
    .then(data => {
        console.log(data.recipe.label)
        setFullRecipe(data)
    })
    .catch(console.error("There was an error loading the recipe"))
  },[params])
  
console.log(fullRecipe)

//for initial loading of data
if (!fullRecipe) {
  return <h2>Loading...</h2>
}

  return (
    <div className='full-recipe'>
      <h2>{fullRecipe.recipe.label}</h2>
    </div>
  )

}

export default FullRecipe