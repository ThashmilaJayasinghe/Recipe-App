import mongoose from "mongoose";

import Recipe from "../models/recipe.model.js";

export const createRecipe = async (req, res) => {
  const recipe = req.body;

  if(!recipe.title || !recipe.image || !recipe.ingredients || !recipe.instructions || !recipe.tags) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newRecipe = new Recipe(recipe);

  try {
    await newRecipe.save();
    res.status(201).json({ success: true, data: newRecipe });
  } catch (error) {
    console.error(`Error in create recipe: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    console.error(`Error in fetching recipes: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
};

export const getRecipe = async (req, res) => {
  const {id} = req.params;

  try {
    const recipe = await Recipe.findById(id);
    res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    console.error(`Error in fetching recipe: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
};

export const updateRecipe = async (req, res) => {
  const {id} = req.params;
  const recipe = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Recipe Id" });
  }

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe, {new:true}) // new:true will return the document after update. Default is to return object before update
    res.status(200).json({ success: true, data: updatedRecipe })
  } catch (error) {
    console.error(`Error in updating recipe: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
};

export const deleteRecipe = async (req, res) => {
  const {id} = req.params;

  try {
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};