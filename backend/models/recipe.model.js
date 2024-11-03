import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: [String],
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
}, {
  timestamps: true // createdAt, updatedAt
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;