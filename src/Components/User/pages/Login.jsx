import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/login-hook.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, doSubmit, reset, errors } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    doSubmit(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 px-4 py-6">
      <div className="w-full max-w-md bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-10 border border-blue-100">

        {/* Back to Home Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 text-gray-800 font-semibold shadow transition duration-300"
          >
            ← Back to Home
          </button>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-1 font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="••••••••"
              className="w-full border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 font-semibold"
            >
              {showPassword ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </button>
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            >
              Login
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

        {/* Register Link */}
        <div className="text-center mt-2">
          <span className="text-gray-600 font-semibold mr-1">Don’t have an account?</span>
          <Link
            to="/register"
            className="text-blue-600 font-bold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
