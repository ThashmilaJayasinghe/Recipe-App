import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import AllRecipesPage from "./pages/AllRecipesPage.jsx"
import FavouritesPage from "./pages/FavouritesPage.jsx"
// import './App.css'

function App() {
  return (
    <div class="bg-amber-50 h-screen">
      {<Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/all" element={<AllRecipesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  )
}

export default App
