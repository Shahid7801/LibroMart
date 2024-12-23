
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [message, setMessage] = useState("");
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            alert("Google sign-in failed!");
            console.error(error);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#403245] to-[#eda88b]">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-2xl max-w-md w-1/2 px-6">
                <h2 className="text-2xl font-bold text-white py-6 text-center">Welcome Back!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label
                            className="block text-white font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 text-gray-900 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label
                            className="block text-white font-semibold mb-2"
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
                            className="w-full px-4 py-2 text-gray-900 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Error Message */}
                    {message && (
                        <p className="text-red-500 text-center mb-4">{message}</p>
                    )}

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#333] text-white py-2 rounded-lg hover:bg-[#ff763e] transition duration-300 shadow-lg font-bold"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Links */}
                <p className="text-center text-white mt-2">
                    Haven't an account?{" "}
                    <Link
                        to="/register"
                        className="text-[#7a2a0a] hover:text-blue-400 underline"
                    >
                        Register
                    </Link>
                </p>
                <p className="text-center text-white">
                    Admin Login?{" "}
                    <Link
                        to="/admin"
                        className="text-[#7a2a0a] hover:text-blue-400 underline"
                    >
                        Admin
                    </Link>
                </p>

                {/* Google Sign-In */}
                <div className="mt-2">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-2 w-full bg-[#c9400a] bg-opacity-30 text-white py-2 rounded-lg hover:bg-[#000000] hover:bg-opacity-40 transition duration-300 font-bold shadow-lg"
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-200 my-4 text-sm">
                    ©2025 LibroMart Online Book Store.<br /> All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
