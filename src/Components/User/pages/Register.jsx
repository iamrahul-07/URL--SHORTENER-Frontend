import React from 'react';
import { useRegister } from '../hooks/Register-hook.js';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, doSubmit, reset, errors } = useRegister();

  const [showPassword, setShowPassword]=useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Back to Home Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 text-gray-800 font-semibold shadow transition duration-300"
          >
            ← Back to Home
          </button>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(doSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              placeholder="Enter your name"
            />
            {errors.name && <span className='text-red-600 text-sm'>{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              placeholder="you@example.com"
            />
            {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-1 font-semibold">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
              className="w-full border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              placeholder="••••••••"
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 font-semibold"
          >
            {showPassword ? <i className="fa-solid fa-eye"></i>  :  <i className="fa-solid fa-eye-slash"></i>}
          </button>
            {errors.password && <span className='text-red-600 text-sm'>{errors.password.message}</span>}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="w-full bg-gray-200 text-gray-800 py-2.5 rounded-xl font-semibold shadow hover:bg-gray-300 transition duration-300 cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Link to Login Page */}
        <div className="text-center mt-2">
          <span className="text-gray-600 font-semibold mr-1">Already have an account?</span>
          <Link
            to="/login"
            className="text-blue-600 font-bold hover:underline"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RegisterForm;
