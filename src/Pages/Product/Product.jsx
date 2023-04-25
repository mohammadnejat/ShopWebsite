import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import "./Product.css"
import { Button } from '@mui/material'
import { BiCheckboxChecked } from "react-icons/bi"
import { CiDeliveryTruck } from "react-icons/ci"
import { BsFillBookmarkCheckFill } from "react-icons/bs"
import { AiFillCreditCard } from "react-icons/ai"
import { GiCheckedShield } from "react-icons/gi"
import { BsFillMapFill } from "react-icons/bs"
import { AiOutlineGift } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Products } from '../../dataBase'
import Header from '../../Component/Header/Header';
import TopButton from '../../Component/TopButton/TopButton';
import Footer from '../../Component/Footer/Footer';


const Product = () => {
    const [number, setNumber] = useState(1)


    const param = useParams()

    const product = Products.find(product => product.id === param.id)
    const notify = () => toast.success('با موفقیت به سبد اضافه شد', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <>
            <Header />
            <div className='productBox'>

                <div className="productImage">
                    <img src={product.img} alt="#" />
                </div>
                <div className="productLeft">
                    <div className="productTitle">
                        <p>{product.title}</p>
                        <span className='text-white'>سیم شارژر</span>
                    </div>
                    <div className='productDash-line'></div>
                    <div className="productPrice desktop">
                        <span>قیمت: </span><span className=''> {product.price} </span> <span>  تومان </span>
                    </div>


                    <div className='stack' >
                        <Button variant="contained" className='btnShop desktop' onClick={notify} style={{ marginTop: "2rem" }} ><span style={{ color: "white", marginLeft: "1rem" }}><SendIcon /></span>افزودن به سبد خرید</Button>
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        <ToastContainer />

                        <div className='input-buttons'>
                            <input type="number" class="qty" step="1" min="1" max="100" name="Quantity" value={number} readonly="readonly" title="تعداد" size="4" inputmode="numeric" id="Quantity" />
                            <div className='minus' onClick={() => number === 1 ? "" : setNumber(number => number = number - 1)}>-</div>
                            <div className='plus' onClick={() => setNumber(number => number = number + 1)}>+</div>
                        </div>
                    </div>

                    <div className='leftBoxes'>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "green" }}><BiCheckboxChecked /></span> <span>موجود در انبار</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "yellow" }}><CiDeliveryTruck /></span> <span>تحویل اکسپرس</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "green" }}><BsFillBookmarkCheckFill /></span> <span>تعداد قابل خرید: </span><span style={{ color: "green" }}> نامحدود</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "red" }}><AiFillCreditCard /></span> <span>پرداخت در محل</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "blue" }}><GiCheckedShield /></span> <span>ضمانت اصل بودن</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "black" }}><BsFillMapFill /></span> <span>ارسال به تمام نقاط</span>
                        </div>
                        <div className='leftFeaturs'>
                            <span style={{ fontSize: "1.2rem", color: "grey" }}><AiOutlineGift /></span> <span>بسته بندی زیبا</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='buttonShop-Mobile'>
                <div className='buttonShop-MobileSection'>
                    <Button variant="contained" onClick={notify} style={{ marginTop: "2rem" }} ><span style={{ color: "white", marginLeft: "1rem" }}><SendIcon /></span>افزودن به سبد خرید</Button>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer />

                </div>
                <div className="productPrice ">
                    <span>قیمت: </span><span className=''> {product.price} </span><span>  تومان </span>
                </div>
            </div>
            <TopButton />
            <Footer />
        </>
    )
}

export default Product