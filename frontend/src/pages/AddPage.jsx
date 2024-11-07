import { useState } from "react";
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/solid'

let nextId = 4;

export default function AddPage({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState(
    {
    id: 0,
    title: "",
    image: "",
    ingredients: [],
    instructions: ["boil water"],
    tags: []
    }
  );

  const [tempIngredient, setTempIngredient] = useState('');
  const [ingredients, setIngredients] = useState(['']);

  const [tempInstructions, setTempInstructions] = useState('');
  const [instructions, setInstructions] = useState(['']);

  const handleUpdateIngredients = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, tempIngredient],
    });
  };

  const handleUpdateInstructions = () => {
    setNewRecipe({
      ...newRecipe,
      instructions: [...newRecipe.instructions, tempInstructions],
    });
  };
   
  return (
    <form className="w-10/12 max-w-2xl bg-lime-200 mx-auto mt-10 p-8 rounded-lg">
      <div className="space-y-12">   
        <h2 className="text-2xl font-semibold text-stone-700">Add New Recipe</h2>
        
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-full">
            <label htmlFor="title" className="block text-base font-medium text-stone-700">
              Recipe Title*
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={newRecipe.title}
                onChange={e => setNewRecipe({...newRecipe, title: e.target.value})}
                required
                autoComplete="title"
                className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-full">
            <label htmlFor="image" className="block text-base font-medium text-stone-700">
              Image URL*
            </label>
            <div className="mt-2">
              <input
                id="image"
                name="image"
                type="text"
                value={newRecipe.image}
                onChange={e => setNewRecipe({...newRecipe, image: e.target.value})}
                required
                autoComplete="image"
                className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
              />
            </div>
          </div>        
        </div>

        {/* ingredients section */}
        <div>
          <label htmlFor="ingredients" className="block text-base font-medium text-stone-700 mb-2">
              Ingredients*
          </label>   
               
          {ingredients.map((ingredient, index) => {
            return (
              <div key={index} id="ingredients">
                <div className="w-1/2 inline border border-indigo-400">
                  <label htmlFor="name" className="text-sm/6 font-medium text-stone-700">
                    Name*
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      onChange={e => setTempIngredient(e.target.value)}
                      autoComplete="name"
                      className="rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="w-1/4 border border-indigo-400">
                  <label htmlFor="quantity" className="block text-sm/6 font-medium text-stone-700">
                    Quantity
                  </label>
                  <div className="mt-2">
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="0"
                      onChange={e => setTempIngredient(tempIngredient + " - " + e.target.value)}
                      autoComplete="quantity"
                      className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="w-1/4 border border-indigo-400">
                  <label htmlFor="unit" className="block text-sm/6 font-medium text-stone-700">
                    Unit
                  </label>
                  <div className="mt-2">
                    <select
                      id="unit"
                      name="unit"
                      onChange={e => setTempIngredient(tempIngredient + e.target.value)}
                      autoComplete="unit"
                      className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:max-w-xs sm:text-sm/6"
                    >
                      <option>n/a</option>
                      <option>g</option>
                      <option>kg</option>
                      <option>cups</option>
                      <option>ml</option>
                      <option>l</option>
                      <option>tbsp</option>
                      <option>tsp</option>
                      <option>oz</option>
                      <option>no's</option>                  
                    </select>
                  </div>
                </div>    
                <button
                  type="button"
                  className="mt-8 p-0 max-w-8 max-h-8 rounded-md bg-lime-600 border border-lime-600 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
                >
                  <XMarkIcon aria-hidden="true" className="mx-auto my-auto h-5 w-5 text-amber-100" />
                </button> 
              </div>
            )
          })}

          <button
            type="button"
            onClick={() => {
              handleUpdateIngredients();
              setIngredients([...ingredients, ""])
            }}
            className="mt-4 col-span-2 rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            Add Ingredient
          </button>
        </div>

        <button
          type="button"
          onClick={() => setInstructions([...instructions, ""])}
          className="mt-6 col-span-2 rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
        >
          Add Instruction
        </button>

        <div className="col-span-full">         
          {instructions.map((instruction, index) => {
            return (
              <div key={index} className="mt-2">
                <textarea
                  id="instructions"
                  name="instructions"
                  required
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm/6"
                  defaultValue={''}              
                  onChange={(e) => setTempInstructions(e.target.value)}
                  onBlur={handleUpdateInstructions} // Triggers when the user leaves the textarea
                />
              </div> 
            );
          })}             
        </div>

        <div className="mt-8 space-y-10">
          <fieldset>
            <legend className="text-sm/6 font-semibold text-stone-700">Add tags</legend>
            <p className="mt-1 text-sm/6 text-gray-600">
              Add tags to more easy identify your recipes
            </p>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="breakfast"
                    name="breakfast"
                    type="checkbox"
                    value="breakfast"
                    onChange={e => setNewRecipe({...newRecipe, tags: [...newRecipe.tags, e.target.value]})}
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
                    onChange={e => setNewRecipe({...newRecipe, tags: [...newRecipe.tags, e.target.value]})}
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
                    onChange={e => setNewRecipe({...newRecipe, tags: [...newRecipe.tags, e.target.value]})}
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
                    id="snack"
                    name="snack"
                    type="checkbox"
                    value="snack"
                    onChange={e => setNewRecipe({...newRecipe, tags: [...newRecipe.tags, e.target.value]})}
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
                    onChange={e => setNewRecipe({...newRecipe, tags: [...newRecipe.tags, e.target.value]})}
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
        <button type="button" className="text-sm/6 font-semibold text-stone-700">
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {      
            handleUpdateIngredients();                
            console.log(newRecipe)
            console.log(tempIngredient)
          }}
          className="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-amber-100 shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
        >
          Save
        </button>
      </div>
    </form>
  )
}
