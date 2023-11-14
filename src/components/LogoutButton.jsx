import React from 'react';
import axios from 'axios';
import { Button } from '@mantine/core';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      // Send a request to the logout endpoint on your API
      await axios.post('http://localhost:8000/api/logout');

      // Clear user authentication data from local storage
      localStorage.removeItem('authToken');
      if (onLogout) {
        onLogout();
      }
      window.location.href = '/Login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
      
    
  );
};

export default LogoutButton;
