import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-md"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 z-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                className="w-full focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


//Login Form
