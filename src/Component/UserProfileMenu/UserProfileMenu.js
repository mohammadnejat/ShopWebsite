import React from 'react'
import { Link } from 'react-router-dom'
import imageProfile from '../../images/userProfile/user.png'
import './UserProfileMenu.css'
const UserProfileMenu = () => {
    return (
        <div className='menu-user'>
            <div className='menu-icon'>
                <img src={imageProfile} alt="#" /><span>نام کاربری</span>
            </div>
            <div className='menu-items'>
                <hr />
                <ul>
                    <Link className='a'>
                        <li className='active'>
                            فعالیت ها
                        </li>
                    </Link>
                    <Link className='a'>
                        <li >
                            سفارش ها
                        </li>
                    </Link>
                    <Link to="/profile/personal-info" className='a'>
                        <li>
                            پروفایل
                        </li>
                    </Link>
                    <Link className='a'>
                        <li>
                            خروج
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default UserProfileMenu