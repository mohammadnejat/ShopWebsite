import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import "./Sidebar.css"
import Button from '@mui/material/Button'


const Sidebar = () => {

    const [className, setClassName] = useState('closed')

    const openSidebar = () => {
        setClassName('')
    }
    const closeSidebar = () => {
        setClassName('closed')
    }

    return (
        <>
            <div style={{ marginTop: "1rem", display: "flex" }} >
                <span onClick={openSidebar} className="openSidebarBtn" style={{ cursor: "pointer" }}><MenuIcon style={{ fontSize: "30px", color: "black" }} /></span>
            </div>
            <div className='sideBar'>
                <div className={`sidebarTitle ${className}`} id='sidebars'>

                    <div className="sidebarBrand">
                        <h1 style={{ fontSize: "40px", fontWeight: "700" }}>امداد موبایل</h1>
                    </div>
                    <div className="sidebarTitle">

                        <div className='sidebarClose'>
                            <span onClick={closeSidebar} id='closeBtn' style={{ cursor: "pointer" }} ><CloseIcon style={{ fontSize: "40px", color: "red", float: "left", margin: "2rem" }} /></span>
                        </div>

                        <div className="user-config">
                            <Link to="/users/login"><Button variant="contained" color="success" startIcon={<LoginIcon sx={{ color: 'white', marginLeft: "10px" }} />}>ورود  |  ثبت نام</Button></Link>
                        </div>

                        <a href=""><span className='sidebarIcon'><HomeIcon className='sidebarIcons' /></span><span className='sidebarSpan'>خانه</span></a>
                        <a href=""><span className='sidebarIcon'><ShoppingBasketIcon className='sidebarIcons' /></span><span className='sidebarSpan'>خرید محصولات</span></a>
                        <a href=""><span className='sidebarIcon'><InfoIcon className='sidebarIcons' /></span><span className='sidebarSpan'>درباره ما</span></a>
                        <a href=""><span className='sidebarIcon'><SupportAgentIcon className='sidebarIcons' /></span><span className='sidebarSpan'>خدمات و ارتباط</span></a>
                        <a href=""><span className='sidebarIcon'><StoreIcon className='sidebarIcons' /></span><span className='sidebarSpan'>خرید محصولات دیجیتال</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar