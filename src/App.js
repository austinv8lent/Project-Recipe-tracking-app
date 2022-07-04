import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  let [recipes, setRecipes] = useState(RecipeData);
  let handleRecipe = (event) => setRecipes([...recipes, event]);
  let deleteRecipe = (event) => {
    let index = event.target.id;
    let newArr = [];
    for(let recipe in recipes){
      if(recipe !== index){
        newArr.push(recipes[recipe]);
      }
    }
    setRecipes(newArr);
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList list={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={handleRecipe} />
    </div>
  );
}

export default App;