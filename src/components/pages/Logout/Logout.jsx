import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Logout() {
  const navigate = useNavigate;
      // Handle Logout
  const handleLogout = () => {
    console.log('User logged out');
    alert('Logged out successfully!');
    navigate('/login');
  }
  
  return (
    
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <p className="text-lg text-center mb-4">You Have Successfully Logged Out</p> */}
      {/* <Link to="Landing" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
         <LogoutButton onLogout={handleLogout} />
      </Link> */}
     
      <Link to="/Login" className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        LOGIN
      </Link>
    </div>
  );
}

export default Logout;
