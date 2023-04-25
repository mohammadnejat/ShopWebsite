import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { supabase } from '../../supabase';
import "./UserLoginDropdown.css"


const UserLoginDropdown = () => {
    const [active, setActive] = useState("notActive")

    const dropDown = () => {
        active === "notActive" ? setActive("active") : setActive("notActive")
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }

    return (
        <>
            <ul onClick={dropDown}>
                <li className='userlogged-menu' ><h5 className='text-white'>کاربر جدید</h5><span className='text-white'><AccountCircleIcon style={{ fontSize: "38px" }} /><ArrowDropDownIcon style={{ fontSize: "30px" }} /></span>
                    <ul className={` text-white rounder ${active}`}>
                        <Link to='/profile' ><li className='mt-2 text-blue-400 bg-white rounded-3xl'>حساب کاربری</li></Link>
                        <Link><li className='mt-2 text-blue-400 bg-white rounded-3xl'>اطلاعات شخصی</li></Link>
                        <Link><li className='mt-2 text-blue-400 bg-white rounded-3xl'>سفارشات</li></Link>
                        <Link to='/' onClick={signOut}><li className='mt-2 text-blue-400 bg-white rounded-3xl'>خروج از حساب</li></Link>
                    </ul>
                </li>

            </ul>
        </>
    )
}

export default UserLoginDropdown