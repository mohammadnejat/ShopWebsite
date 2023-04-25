import React from 'react'
import { AiFillFacebook } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsYoutube } from "react-icons/bs"

import "./Footer.css"

import img1 from "../../images/20.svg"
import img2 from "../../images/21.svg"
import img3 from "../../images/22.svg"
import img4 from "../../images/23.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-box'>
        <div>
          <img src={img1} alt="" />
          <span>
            <span>۱۰ روز ضمانت بازگشت کالا</span>
          </span>
        </div>

        <div >
          <img src={img2} alt="" />
          <div className='footer-box-title'>
            <p>امکان خرید اقساطی</p>
          </div>
        </div>

        <div >
          <img src={img3} alt="" />
          <div className='footer-box-title'>
            <p>تضمین اصالت کالا</p>
          </div>
        </div>

        <div >
          <img src={img4} alt="" />
          <div className='footer-box-title'>
            <p>پشتیبانی تا ۱۲ شب</p>
          </div>
        </div>
      </div>
      <div className='footer-contact'>
        <div className='footer-contact-box'>
          <span>شماره تماس:</span>
          <span>09055098468</span>
        </div>

        <div className='footer-contact-box'>
          <span>آدرس ایمیل:</span>
          <span>mohammadofahmad@Gmail.com</span>
        </div>

        <div className='footer-contact-box'>
          <span>شبکه های اجتماعی:</span>
          <span style={{fontSize:"25px",cursor:"pointer"}}><AiFillFacebook/><BsInstagram/><AiFillTwitterCircle/><BsYoutube/></span>
        </div>
      </div>
      
      <div className='footer-ul'>
        <div className='footer-li'>
          <h4>دفترچه خریداران</h4>
          <ul>
            <li>ثبت سفارش</li>
            <li>روش های پرداخت</li>
            <li>شرایط ارسال</li>
            <li>پیگیری سفارش</li>
            <li>ضمانت و بازگشت کالا</li>
          </ul>
        </div>

        <div className='footer-li'>
        <h4>دفترچه فروشندگان</h4>
          <ul>
            <li>راهنمای فروشندگان</li>
            <li>میخواهم فروشنده شوم</li>
            <li>قوانین و مقررات فروش در تیمچه</li>
          </ul>
        </div>

        <hr />
        <hr />
        <div className='footer-li'>
        <h4>دانستنی‌ها</h4>
          <ul>
            <li>حریم شخصی شما</li>
            <li>قوانین و مقررات ما</li>
            <li>فرصت های شغلی</li>
          </ul>
        </div>

      </div>
      <div style={{textAlign:"center"}}>
      <small style={{color:"black", fontSize:"12px"}}>این سایت ساخته شده توسط 2Fast4Uست
©Copyrights Timcheh Co - 1402</small>
      </div>
    </div>
  )
}

export default Footer