import axios from "axios";

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '' // The backend and frontend are served from the same domain in production
  : 'http://localhost:5000';

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, { username, email, password });
    return response.data.message;  // "User registered successfully" message
  } catch (error) {
    console.error("Registration error:", error.response.data.error);
    throw new Error(error.response.data.error || 'Registration failed');
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, { email, password });
    const { token, error, message } = response.data;

    if(error) {
      throw new Error(message || 'Login failed');
    }

    localStorage.setItem('token', token);
    return { success: true, token };

  } catch (error) {
    console.error('Login Error:', error);
    return { success: false, message: error.response?.data?.message || 'Login failed' };
  }
};

export const getAuthToken = () => localStorage.getItem('token');

export const logout = () => {
  localStorage.removeItem('token');
};