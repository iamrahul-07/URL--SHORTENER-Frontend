import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in py-2">
          URL-SHORTENER APP
        </h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>

          <button
            onClick={() => navigate('/register')}
            className="w-full bg-white text-blue-600 border border-blue-600 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
