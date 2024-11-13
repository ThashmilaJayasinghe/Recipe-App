import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";

import recipeRoutes from "./routes/recipe.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware that allows the acceptance of JSON in request body

app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:5173/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

app.use("/api/recipes", recipeRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  connectDB(); 
  console.log("Server started at http://localhost:" + PORT);
})