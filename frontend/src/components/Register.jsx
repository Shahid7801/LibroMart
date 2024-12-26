import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [message, setMessage] = useState("");
    const { registerUser, signInWithGoogle } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("From Data submitted:", data); // log submitted
        try {
           const user = await registerUser(data.email, data.password);
           console.log("Registration successfull:" ,user);
            alert("User registered successfully!");
        } catch (error) {
            setMessage(error.message,"Please provide a valid email and password");
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
        } catch (error) {
            alert("Google sign-in failed!");
            console.error(error);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#4f404f] to-[#293662] pt-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-2xl max-w-md w-1/2 px-6">
                <h2 className="text-2xl font-bold text-white py-6 text-center">
                    Create Your Account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-6">
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

                    {/* Register Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-[#ff763e] transition duration-300 shadow-lg font-bold"
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* Links */}
                <p className="text-center text-white mt-4">
                    Have an account?{" "}
                    <Link
                        to="/login"
                        className="text-[#a5431c] hover:text-blue-400 underline"
                    >
                        Login
                    </Link>
                </p>
                <p className="text-center text-white mt-2">
                    Admin Login?{" "}
                    <Link
                        to="/admin"
                        className="text-[#a5431c] hover:text-blue-400 underline"
                    >
                        Admin
                    </Link>
                </p>

                {/* Google Sign-In */}
                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-2 w-full bg-[#c9400a] bg-opacity-30 text-white py-2 rounded-lg hover:bg-[#333] hover:bg-opacity-40 transition duration-300 font-bold shadow-lg"
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-200 my-4 text-sm">
                    ©2025 Book Store. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Register;
