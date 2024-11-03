import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import recipeRoutes from "./routes/recipe.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware that allows the acceptance of JSON in request body

app.use("/api/recipes", recipeRoutes);

app.listen(5000, () => {
  connectDB(); 
  console.log("Server started at http://localhost:5000");
})