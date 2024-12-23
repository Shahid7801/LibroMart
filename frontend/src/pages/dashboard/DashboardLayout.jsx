
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashboardLayout = () => {
  
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }

  return (
    <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden sm:flex sm:flex-col w-20 bg-black text-gray-500 py-6">
        <a href="/dashboard" className="inline-flex items-center justify-center h-14 w-14 ml-4 bg-purple-900 hover:bg-purple-500 focus:bg-purple-500 rounded-sm mb-2">
          <img src="/fav-icon.png" alt="Logo" />
        </a>
        <div className="flex-grow flex flex-col justify-between">
          <nav className="flex flex-col mx-4 space-y-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center py-3 text-white hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              <span className="sr-only text-white">Dashboard</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </Link>
            <Link to="/dashboard/add-new-book" className="inline-flex items-center justify-center py-3 text-white hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              <HiViewGridAdd className="h-6 w-6" />
            </Link>
            <Link to="/dashboard/manage-books" className="inline-flex items-center justify-center py-3 text-white hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              <MdOutlineManageHistory className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow bg-white">
        <header className="flex items-center justify-between p-6 bg-white border-b">
          <div className="flex items-center">
            <button className=" text-purple-900 focus:outline-none">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <h1 className="cursor-default text-2xl uppercase font-bold ">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
         
<div className="flex space-x-4">
            <Link to="/dashboard/manage-books" className="inline-flex items-center px-5 py-3 hover:text-black text-white bg-purple-900 hover:bg-purple-400 border border-purple-600 rounded-md">
All Books              </Link>
              <Link to="/dashboard/manage-books" className="inline-flex items-center px-5 py-3 hover:text-black text-white bg-purple-900 hover:bg-purple-400 border border-purple-600 rounded-md">
                Manage Books
              </Link>
              <Link to="/dashboard/add-new-book" className="inline-flex items-center px-5 py-3 text-white bg-purple-900 hover:bg-purple-400 hover:text-black  rounded-md">
                Add New Book
              </Link>
              <Link to="/dashboard/revenueChart" className="inline-flex items-center px-5 py-3 text-white bg-purple-900 hover:bg-purple-400 hover:text-black rounded-md">
                Revenue Chart
              </Link>
            </div>
            <button onClick={handleLogout} className="text-gray-900 hover:text-red-900">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </header>

        <main className="">
            <div>
              <h2 className="text-3xl text-center w-full font-semibold">Book Store</h2>
            </div>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
