import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Component/Header/Header'

import imageSaleSucceed from "../../images/icons/sale2.avif"
import imageSaleUnderOrder from "../../images/icons/shopping.png"
import imageSaleBack from "../../images/icons/online-store.png"
import UserProfileMenu from '../../Component/UserProfileMenu/UserProfileMenu'
import "./Profile.css"
import { Button } from '@mui/material'
const Profile = () => {
    return (
        <>
            <Header />
            <section className='profile'>
                <UserProfileMenu />

                <div className='middle'>
                    <div className='middle-header'>
                        <h3>برای کامل کردن اطلاعات خود اینجا کلیک کنید</h3>
                        <Link to="./personal-info"><Button variant='contained'>تکمیل اطلاعات</Button></Link>
                    </div>

                    <div className="middle-data">
                        <div className='middle-databox'>
                            <div className="middle-dataicon">
                                <img src={imageSaleSucceed} alt="" />
                            </div>
                            <div className="middledatatext">
                                <h4>سفارش</h4>
                                <span>سفارشات تکمیل شده</span>
                            </div>

                        </div>
                        <div className='middle-databox'>
                            <div className="middle-dataicon">
                                <img src={imageSaleUnderOrder} alt="" />
                            </div>
                            <div className="middledatatext">
                                <h4>سفارش</h4>
                                <span>سفارش جاری</span>
                            </div>

                        </div>
                        <div className='middle-databox'>
                            <div className="middle-dataicon">
                                <img src={imageSaleBack} alt="" />
                            </div>
                            <div className="middledatatext">
                                <h4>سفارش</h4>
                                <span>مرجوعی</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile