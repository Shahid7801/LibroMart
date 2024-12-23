import React, { useState } from 'react';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["All Books", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Books");

    const { data: books = [] } = useFetchAllBooksQuery();

    const filteredBooks = selectedCategory === "All Books"
        ? books
        : books.filter(book => book.category === selectedCategory.toLowerCase());

    // Adjust `itemsPerPage` to match grid layout
    const columns = 3; // Base columns for large screens
    const rows = 2; // Number of rows you want on each page
    const itemsPerPage = columns * rows; // Total items per page
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const paginatedBooks = filteredBooks.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Pad paginatedBooks to ensure consistent rows and columns
    const paddedBooks = [
        ...paginatedBooks,
        ...Array(itemsPerPage - paginatedBooks.length).fill(null), // Fill remaining slots with `null`
    ];

    return (
        <div className="w-full py-1">
            {/* Category filtering */}
            <div className=' h-14 w-full bg-[#0e0707] flex flex-col sm:flex-row items-center justify-between shadow-md shadow-orange-400 px-4'>
                <h2 className='text-[#ffffff] font-serif text-lg sm:text-2xl md:text-3xl text-center w-full font-semibold'>
                    TOP SELLERS
                </h2>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category"
                    id="category"
                    className='mt-2 sm:mt-0  hidden sm:block border bg-[#020101] text-white border-gray-300 rounded-md px-4 py-2 focus:outline-[#ff763e]'>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className='w-full h-auto mt-6'>
                {/* Books grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-auto sm sm:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {paddedBooks.map((book, index) => (
                        <div key={index} className="flex flex-col">
                            {book ? (
                                <BookCard book={book} />
                            ) : (
                                <div className="h-0" /> // Placeholder for empty cells
                            )}
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-6">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="bg-[#350a1e] text-white px-4 py-2 rounded-md mx-2 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="text-[#350a1e] font-semibold">
                        {currentPage} / {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="bg-[#350a1e] text-white px-4 py-2 rounded-md mx-2 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopSellers;
