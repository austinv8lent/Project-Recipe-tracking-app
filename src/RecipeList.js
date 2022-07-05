import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Action</th>
          </tr>
        </thead>
         <tbody className="content_row">
          { 
            recipes.map((recipe, index) => 
              ( <Recipe key={index} index={index} deleteRecipe={deleteRecipe} recipe={recipe} /> )
            ) 
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;