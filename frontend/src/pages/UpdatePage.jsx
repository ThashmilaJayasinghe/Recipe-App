import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/solid'


export default function UpdatePage({ onUpdateRecipe }) {  
   
  const location = useLocation();
  const { recipe, all } = location.state;

  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [tempInstructions, setTempInstructions] = useState(recipe.instructions.join("\n")); 

  const navigate = useNavigate();
  
  function handleAddIngredient()  {
    setIngredients([...ingredients, '']);
  }

  function handleRemoveIngredient(index) {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
    setUpdatedRecipe({ ...updatedRecipe, ingredients: updatedIngredients });
  }

  function handleIngredientChange(value, index) {
    const updatedIngredients = ingredients.map((ingredient, i) =>
      i === index ? value : ingredient
    );
    setIngredients(updatedIngredients);
    setUpdatedRecipe({ ...updatedRecipe, ingredients: updatedIngredients });
  }
  
  function handleUpdateInstructions() {
    
    const instructionsArray = tempInstructions.split('\n');

    setUpdatedRecipe({
      ...updatedRecipe,
      instructions: instructionsArray
    });

  };

  function handleCheckbox(e) {
    if(e.target.checked) {
      // adding tag to tags array
      setUpdatedRecipe({
        ...updatedRecipe, 
        tags: [...updatedRecipe.tags, e.target.value]
      })

    } else {
      // removing tag from tags array
      setUpdatedRecipe({
        ...updatedRecipe,
        tags: updatedRecipe.tags.filter(t => t !== e.target.value)
      })
    }
  }
   
  return (
    <form className="w-10/12 max-w-2xl bg-lime-200 mx-auto mt-10 p-8 rounded-lg">
      <div className="space-y-12">   
        <h2 className="text-2xl font-semibold text-stone-700">Update Recipe</h2>
        
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-full">
            <label htmlFor="title" className="block text-base font-medium text-stone-700">
              Recipe Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={updatedRecipe.title}
                onChange={e => setUpdatedRecipe({...updatedRecipe, title: e.target.value})}
                required
                autoComplete="title"
                className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-full">
            <label htmlFor="image" className="block text-base font-medium text-stone-700">
              Image URL
            </label>
            <div className="mt-2">
              <input
                id="image"
                name="image"
                type="text"
                value={updatedRecipe.image}
                onChange={e => setUpdatedRecipe({...updatedRecipe, image: e.target.value})}
                required
                autoComplete="image"
                className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
              />
            </div>
          </div>        
        </div>

        <hr className="border border-lime-300" />

        {/* ingredients section */}
        <div>
          <label htmlFor="ingredients" className="block text-base font-medium text-stone-700 mb-2">
              Ingredients
          </label>   
               
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index} id="ingredients" className="flex justify-between items-center mt-2">
                <div className="w-full">
                  <input 
                    type="text"
                    required
                    value={ingredient}
                    onChange={e => handleIngredientChange(e.target.value, index)}
                    className="block w-11/12 rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
                  />
                </div>            
    
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="py-1.5 px-1.5 max-w-auto max-h-8 rounded-md text-sm font-semibold text-red-500 shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
                >
                  <XMarkIcon aria-hidden="true" className="mx-auto my-auto h-5 w-auto text-red-500" />
                </button> 
              </div>
            )
          })}

          <button
            type="button"
            onClick={handleAddIngredient}
            className="mt-10 col-span-2 rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            Add another ingredient
          </button>
        </div>

        <hr className="border border-lime-300" />

        {/* Instructions Section */}
        <div>
        <label htmlFor="instruction-section" className="-mt-4 pb-6 text-base font-medium text-stone-700">
          Instructions
        </label> 
        <p className="text-sm/6 text-stone-700">
          Enter each instruction on a separate line (press <span className="font-semibold">Enter</span> after each step)
        </p>
        </div>
        <div id="instruction-section" className="inline">         
          <div className="mt-4 flex items-center justify-between">
            <textarea
              id="instructions"
              name="instructions"
              required
              rows={5}
              cols={80}
              value={tempInstructions}
              className="rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"              
              onChange={(e) => setTempInstructions(e.target.value)}
              onBlur={handleUpdateInstructions} // triggers when user leaves the textarea
            />                
          </div>            
        </div>
        

        <hr className="border border-lime-300" />

        <div className="mt-6 space-y-10">
          <fieldset>
            <legend className="text-base font-semibold text-stone-700">Add tags</legend>
            <p className="mt-1 text-sm/6 text-stone-700">
              Organize your recipes with tags!
            </p>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="breakfast"
                    name="breakfast"
                    type="checkbox"
                    value="breakfast"
                    checked={updatedRecipe.tags.includes("breakfast")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="breakfast" className="font-medium text-stone-700">
                    Breakfast
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="lunch"
                    name="lunch"
                    type="checkbox"
                    value="lunch"
                    checked={updatedRecipe.tags.includes("lunch")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="lunch" className="font-medium text-stone-700">
                    Lunch
                  </label>
                </div>
              </div>              
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="dinner"
                    name="dinner"
                    type="checkbox"
                    value="dinner"
                    checked={updatedRecipe.tags.includes("dinner")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="dinner" className="font-medium text-stone-700">
                    Dinner
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="dessert"
                    name="dessert"
                    type="checkbox"
                    value="dessert"
                    checked={updatedRecipe.tags.includes("dessert")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="dessert" className="font-medium text-stone-700">
                    Dessert
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="snack"
                    name="snack"
                    type="checkbox"
                    value="snack"
                    checked={updatedRecipe.tags.includes("snack")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="snack" className="font-medium text-stone-700">
                    Snack
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="favourite"
                    name="favourite"
                    type="checkbox"
                    value="favourite"
                    checked={updatedRecipe.tags.includes("favourite")}
                    onChange={handleCheckbox}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-lime-600"
                  />
                </div>
                <div className="text-sm/6">
                  <label htmlFor="favourite" className="font-medium text-stone-700">
                    Favourite <HeartIcon aria-hidden="true" className="inline mx-auto mb-1 h-5 w-5 text-red-500" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>            
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
          type="button" 
          onClick={() => {
            if(all) {
              navigate('/all')
            } else {
              navigate('/favourites')
            }
          }}
          className="text-sm/6 font-semibold text-stone-700"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {           
            onUpdateRecipe(updatedRecipe)
            if(all) {
              navigate('/all')
            } else {
              navigate('/favourites')
            }
          }}
          className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
        >
          Save
        </button>
      </div>
    </form>
  )
}
