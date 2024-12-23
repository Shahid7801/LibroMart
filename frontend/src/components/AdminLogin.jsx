import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has expired! Please log in again.");
          navigate("/");
        }, 3600 * 1000); // Token expiry after 1 hour
      }
      alert("Admin Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Invalid username or password");
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 flex justify-center items-center px-4">
      <div className="w-full max-w-sm bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Admin Dashboard Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {message && (
            <p className="text-red-500 text-center text-sm mb-4">{message}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
