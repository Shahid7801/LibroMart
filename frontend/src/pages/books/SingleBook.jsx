
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div className="text-center py-16 text-lg">Loading...</div>;
    if (isError) return <div className="text-center py-16 text-lg text-red-500">Error loading book info</div>;

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                {/* Book Cover */}
                <div className="flex justify-center">
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="rounded-lg shadow-md object-cover w-80 h-auto"
                    />
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
                        <p className="text-lg text-gray-700 mb-2">
                            <strong>Author:</strong> {book.author || 'Admin'}
                        </p>
                        <p className="text-lg text-gray-700 mb-2">
                            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-lg text-gray-700 mb-2 capitalize">
                            <strong>Category:</strong> {book?.category}
                        </p>
                        <p className="text-md text-gray-700 mt-4 leading-relaxed">
                            <strong>Description:</strong> {book.description}
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="mt-6 flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#ff7640] transition-all duration-200 space-x-2"
                    >
                        <FiShoppingCart className="text-xl" />
                        <span className="text-lg font-semibold">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
