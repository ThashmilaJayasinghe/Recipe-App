import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import AllRecipesPage from "./pages/AllRecipesPage.jsx"
import FavouritesPage from "./pages/FavouritesPage.jsx"
// import './App.css'

const recipes = [
  {
    title: "Pizza",
    image: "https://i.imgur.com/LqbtHvk.jpeg",
    ingredients: ["500g flour", "200g cheese", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["snack", "dinner", "lunch", "favourite"]
  }, {
    title: "Pasta",
    image: "https://i.imgur.com/KUnPk39.jpeg",
    ingredients: ["500g flour", "200g cheese", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["dinner", "lunch"]
  }, {
    title: "Avacado Toast",
    image: "https://i.imgur.com/n9xN26C.jpeg",
    ingredients: ["500g flour", "200g cheese", "pinch of salt"],
    instructions: ["Make the dough and leave it to rest.", "Flatten dough and add toppings.", "Bake at 350 C for 50 minutes."],
    tags: ["breakfast", "favourite"]
  }
];

function App() {
  return (
    // <div class="bg-amber-50 h-screen">
    <div class="bg-amber-50 pb-10">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/all" element={<AllRecipesPage recipes={recipes} />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
