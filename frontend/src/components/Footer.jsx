import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-orange-400 w-full text-white px-4 py-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-evenly items-center">

        {/* Left Side - Logo and Company Description */}
        <div className="sm:w-2/3 w-full text-center sm:text-left">
          <p className="text-sm text-gray-400">
          <b className='text-center w-full text-[#ff763e] uppercase underline font-bold text-xl'>Your Ultimate Destination for Books </b> <br/>

At LibroMart, we believe in the power of knowledge and the magic of stories. Our online bookstore offers a diverse range of books across genres, from bestsellers to hidden gems, academic resources to timeless classics, all at your fingertips. Whether you're a book enthusiast, a student looking for educational materials, or simply seeking a good read to unwind, we have something for everyone.          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="sm:w-[50%]  mx-10 items-center w-full text-center sm:text-left">
          <h3 className="font-bold mb-2 text-[#ff763e] text-center underline uppercase">Quick Links</h3>
          <ul className="text-center sm:flex-row gap-2 sm:gap-4 grid grid-cols-2">
            <li><Link to="/" className="hover:text-[#ff763e]">Home</Link></li>
            <li><Link to="/service" className="hover:text-[#ff763e]">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#ff763e]">About Us</Link></li>
            <li><Link to="/customer" className="hover:text-[#ff763e]">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-[#ff763e]">FAQ</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Icons */}
        <div className="sm:w-2/12  w-full text-center sm:text-left">
          <h3 className="font-bold mb-2 text-[#ff763e] text-center uppercase underline">Follow Us</h3>
          <div className="  gap-4 text-center sm:gap-10 pl-4">
            <Link to="https://www.facebook.com/ham.sidd.353" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff763e] text-center items-center gap-2 flex pb-2">
              <FaFacebook size={24} />Facebook
            </Link>
           
            <Link to="https://www.instagram.com/sidd_shahid_" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff763e]  items-center gap-2 flex pb-2">
              <FaInstagram size={24} />Instagram
            </Link>
            <Link to="https://github.com/Shahid7801" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff763e]  items-center gap-2 flex pb-2">
              <FaTwitter size={24} />Github
            </Link>
            <Link to="www.linkedin.com/in/shahidsidd" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff763e]  items-center gap-2 flex">
              <FaLinkedin size={24} />Linkedin
            </Link>
          
          </div>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-4 border-t border-gray-700 pt-2">
        <p className="text-sm text-gray-400">&copy; 2025 Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
