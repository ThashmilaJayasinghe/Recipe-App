import axios from "axios";
import { getAuthToken } from './AuthService';

const API_URL  = "http://localhost:5000/api/recipes";

export const fetchRecipes = async () => {
  const token = getAuthToken();
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.data;
}

export const addRecipe = async (newRecipe) => {
  const token = getAuthToken();
  const response = await axios.post(API_URL, newRecipe, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.data;
}

export const updateRecipe = async (id, updateRecipe) => {
  const token = getAuthToken();
  const response = await axios.put(`${API_URL}/${id}`, updateRecipe, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.data;
}

export const deleteRecipe = async (id) => {
  const token = getAuthToken();
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.success;
}