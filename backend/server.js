import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import recipeRoutes from "./routes/recipe.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware that allows the acceptance of JSON in request body

app.use("/api/recipes", recipeRoutes);

app.listen(PORT, () => {
  connectDB(); 
  console.log("Server started at http://localhost:" + PORT);
})