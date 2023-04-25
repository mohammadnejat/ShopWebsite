import React from 'react'
import Card from 'react-bootstrap/Card';
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
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper ">

                    {MostSelledItemss.map(product => (
                <SwiperSlide className=''>
                            <Card className="mostSelledCardsItems">
                                <Link to="/products">
                                    <Card.Img className="imgMostSelled" variant="top" src={product.img} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <div className="mostSelledPrice">
                                        <span>s</span>
                                        <small>{product.price}</small>
                                    </div>
                                </Card.Body>
                            </Card>
                </SwiperSlide>
                    ))}

            </Swiper>
        </>
    )
}

export default Cards