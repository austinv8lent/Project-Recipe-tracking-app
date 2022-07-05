import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  let defaultData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState(defaultData)

  const resetForm = () => setFormData(defaultData)
  
  const editValue = function({target})
  {
    const newData = {...formData, [target.name]: target.value}
    setFormData(newData)
  }

  const submitHandler = function(event)
  {
    event.preventDefault()
    createRecipe(formData)
    resetForm()
  }

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <input type="text" value={formData.name} onChange={editValue} name="name" required placeholder="Name"/>
            </td>
            <td>
              <input type="text" value={formData.cuisine} onChange={editValue} name="cuisine" required placeholder="Cuisine"/>
            </td>
            <td>
              <input type="url" value={formData.photo} onChange={editValue} name="photo" required placeholder="URL"/>
            </td>
            <td>
              <textarea type="text" value={formData.ingredients} onChange={editValue} name="ingredients" required placeholder="Ingredients" />
            </td>
            <td>
              <textarea type="text" value={formData.preparation} onChange={editValue} name="preparation" required placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;