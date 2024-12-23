
import React from 'react';

import bannerImg from "../../assets/library.jpg";

const Banner = () => {
  return (

    <div className='bg-[#000000] mx-auto mt-5 flex flex-col md:w-full w-full  md:flex-row-reverse justify-between items-center gap-12 shadow-2xl border-y-2 border-black'>
      <div className=' md:w-full md:items-center w-full flex items-center md:justify-end'>
        <img src={bannerImg} alt="Banner" className='sm:w-4/5 md:w-4/5 md:items-center ' />
      </div>

      <div className='md:w-1/2 sm:w-5/6 ml-24 w-full px-6 md:px-10 hover:text-[#ff763e]'>
        <h1 className='md:text-5xl text-3xl mb-5 font-serif font-bold  text-center md:text-left text-[#ff763e]'>
          Welcome To LibroMart
        </h1>
        <p className='mb-8 font-medium text-white text-sm md:text-base text-center md:text-left'>
          Your one-stop online bookstore for every kind of reader.<br />
          Explore a curated collection of fiction, non-fiction, academic books, and rare finds – delivered right to your doorstep.
        </p>
        <div className='flex justify-center md:justify-start'>
          <button className='btn-primary bg-white text-[#ff763e] font-semibold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-[#f47b3a]'>
            Subscribe
          </button>
        </div>
      </div>
    </div>

  );
};

export default Banner;
