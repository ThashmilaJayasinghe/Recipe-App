import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const tags = ["All", "Breakfast", "Lunch", "Dinner", "Snack"]

export default function FavouritesPage() {
  const [selected, setSelected] = useState(tags[0]);

  return (
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
              {tags.map((tag) => (
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

        {/* card */}
        <div className="bg-lime-100 rounded-md w-96 max-w-96 p-8">
          <h3 className="text-2xl font-semibold  text-stone-700">Pizza</h3>
          
          <img 
            src="https://i.imgur.com/LqbtHvk.jpeg" 
            alt="Pizza" 
            className="mt-5 w-full max-w-80 h-72 object-cover object-center rounded-md" 
          />
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Ingredients:</p>
            <ul className="list-disc">
              <li>500g flour</li>
              <li>200g cheese</li>
              <li>pinch of salt</li>
            </ul>
          </div>
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Instructions:</p>
            <ol className="list-decimal">
              <li>Make the dough and leave it to rest.</li>
              <li>Flatten dough and add toppings.</li>
              <li>Bake at 350 C for 50 minutes.</li>
            </ol>
          </div>

          <div className="mt-7 flex gap-1.5">
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">snack</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">dinner</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">lunch</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">favourite</p>
          </div>

        </div>

        {/* card */}
        <div className="bg-lime-100 rounded-md w-96 max-w-96 p-8">
          <h3 className="text-2xl font-semibold  text-stone-700">Pizza</h3>
          
          <img 
            src="https://i.imgur.com/LqbtHvk.jpeg" 
            alt="Pizza" 
            className="mt-5 w-full max-w-80 h-72 object-cover object-center rounded-md" 
          />
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Ingredients:</p>
            <ul className="list-disc">
              <li>500g flour</li>
              <li>200g cheese</li>
              <li>pinch of salt</li>
            </ul>
          </div>
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Instructions:</p>
            <ol className="list-decimal">
              <li>Make the dough and leave it to rest.</li>
              <li>Flatten dough and add toppings.</li>
              <li>Bake at 350 C for 50 minutes.</li>
            </ol>
          </div>

          <div className="mt-7 flex gap-1.5"> 
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">snack</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">dinner</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">lunch</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">favourite</p>
          </div>

        </div>
        

        {/* card */}
        <div className="bg-lime-100 rounded-md w-96 max-w-96 p-8">
          <h3 className="text-2xl font-semibold  text-stone-700">Pizza</h3>
          
          <img 
            src="https://i.imgur.com/LqbtHvk.jpeg" 
            alt="Pizza" 
            className="mt-5 w-full max-w-80 h-72 object-cover object-center rounded-md" 
          />
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Ingredients:</p>
            <ul className="list-disc">
              <li>500g flour</li>
              <li>200g cheese</li>
              <li>pinch of salt</li>
            </ul>
          </div>
          
          <div className="mt-5">
            <p className="text-lg font-semibold">Instructions:</p>
            <ol className="list-decimal">
              <li>Make the dough and leave it to rest.</li>
              <li>Flatten dough and add toppings.</li>
              <li>Bake at 350 C for 50 minutes.</li>
            </ol>
          </div>

          <div className="mt-7 flex gap-1.5"> 
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">snack</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">dinner</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">lunch</p>
            <p className="bg-lime-500 px-1 rounded text-amber-100 text-center">favourite</p>
          </div>

        </div>

      </div>
    </>
  );
}