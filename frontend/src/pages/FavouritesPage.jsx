import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';

import ConfirmDeleteModal from "../components/ConfirmDeleteModal.jsx";

const filterTags = ["All", "Breakfast", "Lunch", "Dinner", "Snack"]

export default function AllRecipesPage({ recipes, onDeleteRecipe }) {
  const [favourites, setFavourites] = useState(recipes.filter(recipe => recipe.tags.includes("favourite")));
  const [selected, setSelected] = useState(filterTags[0]);  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [recipeId, setRecipeId] = useState(0);

  
  function handleDeleteRecipe(recipeId) {    
    onDeleteRecipe(recipeId); 
    setFavourites(favourites.filter(favourite => favourite.id !== recipeId));   
    setIsDeleteModalOpen(false);
  }

  
  return(
    <>
      <div className="max-w-md px-10 pt-10 mx-auto">
        <Listbox value={selected} onChange={setSelected}>
          <Label className="block text-sm/6 font-medium text-stone-600">Filter By...</Label>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-stone-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 sm:text-sm/6">
              <span placeholder="filter by..." className="ml-3 block truncate">{selected}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {filterTags.map((tag) => (
                <ListboxOption
                  key={tag}
                  value={tag}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-stone-700 data-[focus]:bg-lime-100 data-[focus]:text-stone-700"
                >
                  
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {tag}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-lime-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div className="p-10 flex flex-wrap justify-center align-center gap-5">   

        {favourites.map(recipe => {

          for(const tag of recipe.tags) {
            if(tag === selected.toLowerCase() || selected === "All") {
              return (
                <div key={recipe.id} className="bg-lime-100 rounded-md w-96 max-w-96 p-8">
                  <h3 className="text-2xl font-semibold  text-stone-700">{recipe.title}</h3>
                  
                  <img 
                    src={recipe.image}
                    alt={recipe.title} 
                    className="mt-5 w-full max-w-80 h-72 object-cover object-center rounded-md" 
                  />
                  
                  <div className="mt-5">
                    <p className="text-lg font-semibold">Ingredients:</p>
                    <ul className="list-disc">
                      {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}                  
                    </ul>
                  </div>
                  
                  <div className="mt-5">
                    <p className="text-lg font-semibold">Instructions:</p>
                    <ol className="list-decimal">
                      {recipe.instructions.map(instruction => <li key={instruction}>{instruction}</li>)}                  
                    </ol>
                  </div>

                  <div className="mt-7 flex gap-1.5">                                      
                    <a href="/update" className="bg-lime-500 p-2 rounded text-amber-100 text-center">            
                     <PencilSquareIcon aria-hidden="true" className="h-5 w-5 text-amber-100" />
                    </a>
                    <button
                      onClick={() => {
                        setRecipeId(recipe.id)
                        setIsDeleteModalOpen(true)
                      }}
                      className="bg-red-500 p-2 rounded text-amber-100 text-center"
                    >
                      <TrashIcon aria-hidden="true" className="h-5 w-5 text-amber-100" />
                    </button>
                  </div>

                </div>
              );
            }           
          }
        })}       
      </div>  
      <ConfirmDeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirmation={() => handleDeleteRecipe(recipeId)} />   
    </>    
  );
}