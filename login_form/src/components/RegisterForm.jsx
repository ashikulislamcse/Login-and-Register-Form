import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600"
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
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>
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
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-700 mt-4">
          Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;