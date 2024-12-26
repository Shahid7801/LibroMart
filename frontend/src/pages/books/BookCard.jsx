import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { HiOutlineHeart } from 'react-icons/hi2';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className=" relative bg-transparent w-full shadow-slate-900  flex flex-row  sm:w-80 h-60 ml-10 sm:ml- md:ml- rounded-sm border  transition-transform duration-1000 shadow-lg hover:shadow-2xl hover:scale-105 hover:shadow-black my-4">
            {/* Wishlist Icon */}
            <button className="absolute top-4 left-4 p-1 bg-white rounded-full shadow-md hover:bg-[#ff763e]  transition-colors duration-1000">
                <HiOutlineHeart className="text-[#ff763b] hover:text-black text-xl" />
            </button>

            {/* Book Image */}
            <div className="sm:w-1/2 md:w-1/33 w-2/5 h-full  p-2 flex-shrink-0 ">
                <Link to={`/books/${book._id}`}>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt="Book Cover"
                        className="w-full h-full object-cover rounded-md shadow-lg hover:scale-50 duration-1000 hover:shadow-slate-900"
                    />
                </Link>
            </div>

            {/* Book Details */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-base font-semibold hover:text-[#ff763e] duration-300">
                            {book?.title.length > 20 ? `${book?.title.slice(0, 20)}...` : book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-700 mt-2 text-sm">
                        {book?.description.length > 60
                            ? `${book.description.slice(0, 60)}...`
                            : book?.description}
                    </p>
                </div>
                <div>
                    <p className="font-medium mt-3">
                        Rs {book?.newPrice}{' '}
                        <span className="line-through font-normal text-gray-500 ml-1">
                            Rs {book?.oldPrice}
                        </span>
                    </p>
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="btn-primary px-1 py-1 mt-3 bg-[#000000] text-white rounded-md transition-transform duration-300  hover:bg-[#ffb89c] flex justify-center items-center space-x-1"
                    >
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
