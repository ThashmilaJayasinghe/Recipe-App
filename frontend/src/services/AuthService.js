import axios from "axios";


export const register = async (username, email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
    return response.data.message;  // "User registered successfully" message
  } catch (error) {
    console.error("Registration error:", error.response.data.error);
    throw new Error(error.response.data.error || 'Registration failed');
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
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