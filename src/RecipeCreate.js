import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  let initialFormState = {
    name: " ",
    cuisine: " ",
    photo: " ",
    ingredients: " ",
    preparation: " ",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  let handleChange = ({ target }) => {
    let value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
   return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                value={formData.cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
                required
              ></input>
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                value={formData.photo}
                placeholder="URL"
                onChange={handleChange}
                required
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                onChange={handleChange}
                required
              ></textarea>
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