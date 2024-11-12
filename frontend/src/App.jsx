import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import AllRecipesPage from "./pages/AllRecipesPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx"

import { fetchRecipes, addRecipe, updateRecipe, deleteRecipe } from "./services/RecipeService.js";



const initialRecipes = [
  {
    id: 1,
    title: "Pizza",
    image: "https://i.imgur.com/LqbtHvk.jpeg",
    ingredients: ["flour - 500g", "cheese - 200g", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["snack", "dinner", "lunch", "favourite"]
  }, {
    id: 2,
    title: "Pasta",
    image: "https://i.imgur.com/KUnPk39.jpeg",
    ingredients: ["flour - 500g", "cheese - 200g", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["dinner", "lunch"]
  }, {
    id: 3,
    title: "Avacado Toast",
    image: "https://i.imgur.com/n9xN26C.jpeg",
    ingredients: ["flour - 500g", "cheese - 200g", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["breakfast", "favourite"]
  },{
    id: 4,
    title: "Chocolate Cake",
    image: "https://i.imgur.com/Wxwiimg.jpeg",
    ingredients: ["flour - 500g", "chocolate - 200g", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["dessert", "favourite"]
  }
];

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then(data => setRecipes(data))
      .catch(error => console.log(error))
  }, []);


  function handleAddRecipe(newRecipe) {
    addRecipe(newRecipe)
      .then(data => setRecipes([
        ...recipes,
        {...data}
      ]))
      .catch(error => console.log(error));
  }

  function handleUpdateRecipe(updatedRecipe) {
    updateRecipe(updatedRecipe._id, updatedRecipe)
      .then(data => {
        setRecipes(recipes.map(recipe => {
          if(recipe._id === data._id) {
            return data
          } else {
            return recipe
          }
        }))
      })
      .catch(error => console.log(error));
  }

  function handleDeleteRecipe(recipeId) {
    deleteRecipe(recipeId)
    .then(success => {
      if(success) {
        setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
      }
    })
    .catch(error => console.log(error));  
  }

  return (    
    <div className="bg-amber-50 min-h-screen">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ProtectedRoute><AddPage onAddRecipe={handleAddRecipe} /></ProtectedRoute>} />
        <Route path="/update" element={<ProtectedRoute><UpdatePage onUpdateRecipe={handleUpdateRecipe} /></ProtectedRoute>} />
        <Route path="/all" element={<ProtectedRoute><AllRecipesPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} /></ProtectedRoute>} />
        <Route path="/favourites" element={<ProtectedRoute><FavouritesPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App
