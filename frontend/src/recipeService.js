import axios from "axios";

const API_URL  = "http://localhost:5000/api/recipes";

export const fetchRecipes = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
}

export const addRecipe = async (newRecipe) => {
  const response = await axios.post(API_URL, newRecipe);
  return response.data.data;
}

export const updateRecipe = async (id, updateRecipe) => {
  const response = await axios.put(`${API_URL}/${id}`, updateRecipe);
  return response.data.data;
}

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data.success;
}