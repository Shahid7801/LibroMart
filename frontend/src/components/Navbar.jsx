// import { Link } from "react-router-dom";
// import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
// import { IoSearchOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi";

// import avatarImg from "../assets/avatar.png"
// import profile from "../assets/profile.png"
// import home from "../assets/home.png"

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useAuth } from "../context/AuthContext";

// const navigation = [
//     { name: "Home", href: "/" },
//     { name: "Dashboard", href: "/user-dashboard" },
//     { name: "Orders", href: "/orders" },
//     { name: "Cart Page", href: "/cart" },
//     { name: "Check Out", href: "/checkout" },
// ]

// const Navbar = () => {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//     const cartItems = useSelector(state => state.cart.cartItems);

//     const { currentUser, logout } = useAuth()

//     const handleLogOut = () => {
//         logout()
//     }

//     const token = localStorage.getItem('token');

//     return (
//         <header className="min-w-full w-full fixed z-50 bg-[#fff] shadow-xl shadow-black">
//             <nav className="flex justify-between -mx-2 items-center w-full h-12 ">
//                 {/* left side */}
//                 <div className="flex items-center md:gap-1 gap-1">
//                     <Link to="/">
//                         {/* <HiMiniBars3CenterLeft className="size-6 text-[#ff763b] ml-4" /> */}
//                         <img src={home} alt="" className={`size-7 rounded-full mx-5 ring-1 ring-[#ff763b]`} />
                                                
//                     </Link>
//                     <h6 className="w-full h-full text-3xl  font-extrabold font-serif text-[#ff763b] mx-5">LibroMart</h6>
//                     {/* search input */}
//                     <div className="relative  space-x-1 hidden sm:block md:block">

//                         <IoSearchOutline className="absolute inline-block left-3 inset-y-2  " />

//                         <input type="search" placeholder="Search here"
//                             className="bg-[#ffffff] py-1 md:px-8 px-6 rounded-md ring-1 ring-[#ff763b] focus:outline-[#6f3b3b] sm:w-36 md:w-96"
//                         />
//                     </div>
//                 </div>


//                 {/* rigth side */}
//                 <div className="relative flex justify-around items-center md:space-x-3 space-x-2 ">
//                     <div >
//                         {
//                             currentUser ? <>
//                                 <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                                     <img src={profile} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-[#ff763b]' : ''}`} />
//                                 </button>
//                                 {/* show dropdowns */}
//                                 {
//                                     isDropdownOpen && (
//                                         <div className="absolute right-0 mt-4 w-32 bg-white text-black shadow-lg rounded-md z-40 ring-2 ring-[#ff763b]">
//                                             <ul className="py-2">
//                                                 {
//                                                     navigation.map((item) => (
//                                                         <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
//                                                             <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-[#ff763b]">
//                                                                 {item.name}
//                                                             </Link>
//                                                         </li>
//                                                     ))
//                                                 }
//                                                 <li>
//                                                     <button
//                                                         onClick={handleLogOut}
//                                                         className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-fuchsia-400">Logout</button>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     )
//                                 }
//                             </> : token ? <Link to="/login" className='border-b-2  border-primary ring-2 ring-[#ff763b] '>
//                                 <img src={avatarImg} alt="" className={`size-7 rounded-full ring-2 ring-[#ff763b] : ''}`} />

//                             </Link> : (
//                                 <Link to="/login"> <HiOutlineUser className="size-6" /></Link>
//                             )
//                         }
//                     </div>

//                     <button className="hidden sm:block">
//                         <HiOutlineHeart className="size-6 text-[#ff763b]" />
//                     </button>

//                     <Link to="/cart" className="bg-[#ff763b] p-1 sm:px-2 px-2 flex items-center rounded-full ring-2 ring-[#ff763b] ">
//                         <HiOutlineShoppingCart className='' />
//                         {
//                             cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
//                         }


//                     </Link>
//                 </div>
//             </nav>
//          </header>
//     )
// }

// export default Navbar;















import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import profile from "../assets/profile.png";
import home from "../assets/home.png";

import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Create a ref for dropdown
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
    };

    const token = localStorage.getItem("token");

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="min-w-full w-full fixed z-50 bg-[#fff] shadow-xl shadow-black">
            <nav className="flex justify-between -mx-2 items-center w-full h-12">
                {/* Left Side */}
                <div className="flex items-center md:gap-1 gap-1">
                    <Link to="/">
                        <img src={home} alt="" className={`size-7 rounded-full mx-5 ring-1 ring-[#ff763b]`} />
                    </Link>
                    <h6 className="w-full h-full text-3xl font-extrabold font-serif text-[#ff763b] mx-5">
                        LibroMart
                    </h6>
                    {/* Search Input */}
                    <div className="relative space-x-1 hidden sm:block md:block">
                        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
                        <input
                            type="search"
                            placeholder="Search here"
                            className="bg-[#ffffff] py-1 md:px-8 px-6 rounded-md ring-1 ring-[#ff763b] focus:outline-[#6f3b3b] sm:w-36 md:w-96"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative flex justify-around items-center md:space-x-3 space-x-2">
                    <div ref={dropdownRef}>
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img
                                        src={profile}
                                        alt=""
                                        className={`size-7 rounded-full ${
                                            currentUser ? "ring-2 ring-[#ff763b]" : ""
                                        }`}
                                    />
                                </button>
                                {/* Show Dropdown */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-4 w-32 bg-white text-black shadow-lg rounded-md z-40 ring-2 ring-[#ff763b]">
                                        <ul className="py-1">
                                            {navigation.map((item) => (
                                                <li
                                                    key={item.name}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <Link
                                                        to={item.href}
                                                        className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-[#ff763b]"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-900 hover:text-fuchsia-400"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : token ? (
                            <Link
                                to="/login"
                                className="border-b-2 border-primary ring-2 ring-[#ff763b]"
                            >
                                <img
                                    src={avatarImg}
                                    alt=""
                                    className={`size-7 rounded-full ring-2 ring-[#ff763b] : ''}`}
                                />
                            </Link>
                        ) : (
                            <Link to="/login">
                                {" "}
                                <HiOutlineUser className="size-6" />
                            </Link>
                        )}
                    </div>

                    <button className="hidden sm:block">
                        <HiOutlineHeart className="size-6 text-[#ff763b]" />
                    </button>

                    <Link
                        to="/cart"
                        className="bg-[#ff763b] p-1 sm:px-2 px-2 flex items-center rounded-full ring-2 ring-[#ff763b]"
                    >
                        <HiOutlineShoppingCart className="" />
                        {cartItems.length > 0 ? (
                            <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
                        ) : (
                            <span className="text-sm font-semibold sm:ml-1">0</span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
