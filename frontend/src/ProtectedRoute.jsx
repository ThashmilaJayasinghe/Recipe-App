import { Navigate } from 'react-router-dom';
import { getAuthToken } from "./services/AuthService.js";

export default function ProtectedRoute({ children }) => {
  const isAuthenticated = !!getAuthToken();
  return isAuthenticated ? children : <Navigate to="/login" />;
};