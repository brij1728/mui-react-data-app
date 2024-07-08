import { Navigate } from 'react-router-dom';
import React from 'react';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const userDetails = localStorage.getItem('userDetails');

  if (!userDetails) {
    return <Navigate to="/" replace />;
  }

  return children;
};

