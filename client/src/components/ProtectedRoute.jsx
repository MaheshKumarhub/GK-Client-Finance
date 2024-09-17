import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Check if the token exists

  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/" />;
  }

  // If token exists, render the children (protected component)
  return children;
};

export default ProtectedRoute;
