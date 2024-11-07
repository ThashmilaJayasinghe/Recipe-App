import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";
import AllRecipesPage from "./pages/AllRecipesPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

// import ConfirmDeleteModal from "./components/ConfirmDeleteModal.jsx";
// import './App.css'

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
  }
];

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);

  function handleAddRecipe(newRecipe) {
    setRecipes([
      ...recipes,
      {...newRecipe}
    ]);
  }

  function handleUpdateRecipe(updatedRecipe) {
    setRecipes(recipes.map(recipe => {
      if(recipe.id === updatedRecipe.id) {
        return updatedRecipe
      } else {
        return recipe
      }
    }))
  }

  function handleDeleteRecipe(recipeId) {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
  }

  return (
    // <div className="bg-amber-50 h-screen">
    <div className="bg-amber-50 pb-10 min-h-screen">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage onAddRecipe={handleAddRecipe} />} />
        <Route path="/update" element={<UpdatePage onUpdateRecipe={handleUpdateRecipe} />} />
        <Route path="/all" element={<AllRecipesPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
        <Route path="/favourites" element={<FavouritesPage recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App
