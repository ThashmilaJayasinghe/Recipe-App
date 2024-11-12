import express from "express";
import { createRecipe, getAllRecipes, getRecipe, updateRecipe, deleteRecipe } from "../controllers/recipe.controller.js";
import { authenticate } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", authenticate, createRecipe);
router.get("/", authenticate, getAllRecipes);
router.get("/:id", authenticate, getRecipe);
router.put("/:id", authenticate, updateRecipe);
router.delete("/:id", authenticate, deleteRecipe);

export default router;