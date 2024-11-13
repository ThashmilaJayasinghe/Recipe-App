import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import { logout } from "../services/AuthService.js";
import recipe from "/recipeNav.svg";

export default function Navbar({ setLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('token');

  function handleLogout() {
    setLoggedIn(false);
    logout();
    navigate('/');
  };

  return (
    <header className="bg-lime-600 h-24">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">            
            <img
              alt="recipe book"
              src={recipe}
              className="inline h-10 w-auto"
            />
            <span className="text-3xl ml-1 inline-block align-middle font-semibold text-amber-50">RecipeHaven</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-amber-50 hover:bg-lime-500/75"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/add" className="text-lg font-semibold text-amber-100">
            Add Recipe
          </a>
          <a href="/all" className="text-lg font-semibold text-amber-100">
            All Recipes
          </a>
          <a href="/favourites" className="text-lg font-semibold text-amber-100">
            Favourites
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-lg font-semibold text-amber-100 border border-lime-700 rounded bg-lime-700/65 hover:bg-lime-700 py-1 px-6"
            >
              Log out
            </button>
          ) : (
            <a href="/login" className="text-lg font-semibold text-amber-100 border border-lime-700 rounded bg-lime-700/65 hover:bg-lime-700 py-1 px-6">
              Log in
            </a>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-lime-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">              
              <img
                alt="recipe book"
                src={recipe}
                className="inline h-8 w-auto"
              />
              <span className="text-3xl ml-1 inline-block align-middle font-semibold text-amber-50">RecipeHaven</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-amber-50 bg-lime-600 hover:bg-lime-500/75"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">              
                <a
                  href="/add"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-amber-100 hover:bg-lime-500/75"
                >
                  Add Recipe
                </a>
                <a
                  href="/all"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-amber-100 hover:bg-lime-500/75"
                >
                  All Recipes
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-amber-100 hover:bg-lime-500/75"
                >
                  Favourites
                </a>
              </div>
              <div className="py-6">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-amber-100 hover:bg-lime-500/75"
                  >
                    Log out
                  </button>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold text-amber-100 hover:bg-lime-500/75"
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
