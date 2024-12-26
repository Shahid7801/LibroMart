import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// image
import Image from '../../assets/banner1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommened = () => {


    const { data: books = [] } = useFetchAllBooksQuery();
    return (
        <div className=' w-full '>
            < img src={Image}  className="shadow-blac  border-t-2 border-[#ff763e]  w-full h-64 object-cover border"
            />
            <h2 className='w-[100%] items-center justify-between mx-auto bg-[#000000]  text-3xl text-center font-semibold mb-1 text-[#f9f9f9] shadow-md shadow-orange-400'>Recomended for you </h2>


                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1180: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {

                        books.length > 0 && books.slice(8, 18).map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>

        // </div>
    )
}

export default Recommened