import React from 'react'
import "./Cards.css"
import { MostSelledItemss } from '../../dataBase';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    390: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                className=" mySwiper">
                {MostSelledItemss.map(product => (
                    <SwiperSlide key={product.id} className='pb-4'>
                        <div className="flex flex-col w-5/6 h-40 bg-white lg:h-4/5 rounded-xl">
                            <div className=''>
                                <Link to="/products">
                                    <img className="p-1 mySwiper2 lg:w-52 lg:h-4/5" variant="top" src={product.img} />
                                </Link>
                            </div>

                            <div>
                                <span>{product.title}</span>
                                <div className="">
                                    <small className='text-mobile'>{product.price}</small>
                                    <small className='text-mobile'>تومان</small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    )
}

export default Cards