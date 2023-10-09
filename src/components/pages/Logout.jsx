import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg text-center mb-4">You Have Successfully Logged Out</p>
      <Link to="/login" className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        LOGIN
      </Link>
    </div>
  );
}

export default Logout;
