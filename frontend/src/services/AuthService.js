import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
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