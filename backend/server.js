import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";
import Recipe from "./models/recipe.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware that allows the acceptance of JSON in request body

app.get("/", (req, res) => {
  res.send("Server is ready");
})

app.post("/api/recipes", async (req, res) => {
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
})

app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.status(200).json({ success: true, data: recipes });
  } catch (error) {
    console.error(`Error in fetching recipes: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
})

app.get("/api/recipes/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const recipe = await Recipe.findById(id);
    res.status(200).json({ success: true, data: recipe });
  } catch (error) {
    console.error(`Error in fetching recipe: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
})

app.put("/api/recipes/:id", async (req, res) => {
  const {id} = req.params;
  const recipe = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Recipe Id" });
  }

  try {
    const updatedProduct = await Recipe.findByIdAndUpdate(id, recipe, {new:true}) // new:true will return the document after update. Default is to return object before update
    res.status(200).json({ success: true, data: updatedProduct })
  } catch (error) {
    console.error(`Error in updating recipe: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" }); 
  }
})

app.delete("/api/recipes/:id", async (req, res) => {
  const {id} = req.params;

  try {
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
})


app.listen(5000, () => {
  connectDB(); 
  console.log("Server started at http://localhost:5000");
})