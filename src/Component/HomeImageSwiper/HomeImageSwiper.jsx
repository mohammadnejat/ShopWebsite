import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "./HomeImageSwiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {DataCarousel,ProductsSell} from '../../dataBase';



function HomeImageSwiper() {
    return (
        <>
            <div >
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {DataCarousel.map(data => (

                        <SwiperSlide key={data.id} ><img src={data.img} alt="" /></SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <div className="pl-20 pr-20 swiper-icon">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        390: {
                            slidesPerView: 2,
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
                            slidesPerView: 8,
                            spaceBetween: 0,
                        },
                    }}
                    className="mySwiper"
                >

                    {ProductsSell.map(product => (
                        <SwiperSlide className='flex flex-col' key={product.id} ><img style={{ borderRadius: "50%", height: "8rem", width: "8rem", border: "5px solid #2563EB", }} src={product.img} alt="#" /><h4>{product.title}</h4></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default HomeImageSwiper