import React from 'react'
import "./Header.css"
import Container from '@mui/material/Container';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import UserLoginDropdown from '../UserLoginDropdown/UserLoginDropdown';
import { useUser } from '@supabase/auth-helpers-react';




const Header = () => {
  const user = useUser()

  const toggleMenuShopAllproducts = document.querySelector('.menu-allproducts')

  const dropDownShopMenuAllproducts = () => {
    toggleMenuShopAllproducts.classList.toggle('active')
  }


  return (
    <>

      <Sidebar />
      <Container id='home' maxWidth="xl">

        <div className="topHeader">
          <div className="topHeader-Right">
          </div>

          <div className="topHeader-Left">
          </div>
        </div>

        <hr />

        <div className="header">
          <div className="border rounded-full brand" >
            <h1 className='text-5xl font-bold text-sky-700'>امداد موبایل</h1>
          </div>

          <div className='flex p-2 border justify-evenly bg-cyan-600 rounded-2xl'>
            <div className=" menu">
              <ul className='manu-items '>
                <li>
                  <Link to="/" className='text-white'>خانه</Link>
                </li>
                <li>
                  <a className='text-white shop-menu' href="#">فروشگاه<ArrowDropDownIcon /></a>
                  <ul className='menu-navitems'>
                    <li className='text-white'>خرید قاب</li>
                    <li className='text-white'>خرید گوشی</li>
                    <li className='text-white'>خرید هدفون</li>
                  </ul>
                </li>
                <li><Link to="/services" className='text-white'>خدمات</Link></li>
                <li><Link to="/aboutus" className='text-white'>درباره ما</Link></li>
              </ul>
            </div>
            <div className='mr-64'>

              {user === null ?
                <Link to="/users/login"><Button variant="contained" color="success" startIcon={<LoginIcon sx={{ color: 'white', marginLeft: "10px" }} />}>ورود  |  ثبت نام</Button></Link>
                :
                <UserLoginDropdown />
              }

            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div  className='cursor-pointer menu-dropdown-right bg-slate-500 hover:bg-black'>
            <a onClick={dropDownShopMenuAllproducts} href="#">
              <span className='ml-2 text-white'>دسته بندی ها</span>
              <span className='text-white'><MenuIcon /></span>
            </a>
            <ul className='menu-allproducts'>
              <li>خرید قاب</li>
              <li>خرید گوشی</li>
              <li>خرید هدفون</li>
            </ul>
          </div>

          <div className='cursor-pointer menu-dropdown-center '>
            <div className='bg-blue-600 menu-dropdown-allproducts'>
              <span className='text-white '>همه دسته ها</span>
            </div>

            <div className="mb-3 input-group input-center">
              <input type="text" placeholder='جستجوی محصول ...' className="form-control" />
              <button className="bg-blue-600 btn btn-outline-secondary btn-search" type="button" id="button-addon1">جستجو</button>
            </div>
          </div>

          <div className='cursor-pointer menu-dropdown-left bg-slate-500'>
            <span>فروش بزرگ جمعه سیاه</span>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header