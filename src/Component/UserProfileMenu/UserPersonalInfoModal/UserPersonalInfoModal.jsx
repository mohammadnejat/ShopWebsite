import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './UserPersonalInfoModal.css'

const UserPersonalInfoModal = ({ modalQuit, setModalQuit }) => {

    const closeModal = () => {
        setModalQuit(false)
    }


    return (
        <div className={`fixed top-0 left-0 z-10 w-screen h-screen ${modalQuit ? "Show" : "noShow"}`} style={{ backdropFilter: "blur(5px)" }}>
            <div className='fixed z-20 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg top-1/2 left-1/2'>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-bold'>ثبت اطلاعات شناسایی</h3>
                    <button onClick={closeModal} ><ClearIcon /></button>
                </div>
                <div className='flex gap-6'>
                    <TextField className='text-sm' size='small' />
                    <TextField className='w-1/3' size='small' />
                </div>
                <p>کدملی</p>
                <TextField className='w-2/3' size='small' />
                <br />
                <br />
                <hr />
                <br />
                <div className='flex justify-end gap-3'>
                    <Link><Button variant="contained" className='bg-blue-100'>ثبت تغییرات</Button></Link>
                    <Link><Button variant="contained" onClick={closeModal} style={{ background: "#C40316" }}>لغو</Button></Link>

                </div>
            </div>
        </div>
    )
}

export default UserPersonalInfoModal