import React, { useState } from 'react'
import Header from '../../../Component/Header/Header'
import UserProfileMenu from '../../../Component/UserProfileMenu/UserProfileMenu'
import UserPersonalInfoModal from '../../../Component/UserProfileMenu/UserPersonalInfoModal/UserPersonalInfoModal'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './info.css'
const Info = () => {

  const [modalQuit, setModalQuit] = useState(false);

  const showModal = () => {
    setModalQuit(true)
  }

  return (
    <>
      <div className=''>
        <Header />

        <section className='personal-info'>
          <UserProfileMenu />
          <div className="grid grid-cols-2 p-3 border rounded-2xl">
            <div className="flex justify-between ">
              <div className='flex flex-col '>
                <span className="text-lg text-slate-500">نام و نام خانوادگی</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className='flex flex-col'>
                <span className="text-lg text-slate-500">کد ملی</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className='flex flex-col '>
                <span className="text-lg text-slate-500">شماره موبایل</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className='flex flex-col'>
                <span className="text-sm text-slate-500">ایمیل</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className='flex flex-col'>
                <span className="text-lg text-slate-500">رمز عبور</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
            </div>
            <div className="flex justify-between">
              <div className='flex flex-col'>
                <span className="text-lg text-slate-500">تاریخ تولد</span>
                <p className="font-bold">اسم</p>
              </div>
              <div className='ml-20 cursor-pointer' onClick={showModal}>
                <BorderColorIcon />
              </div>
              <UserPersonalInfoModal  modalQuit={modalQuit} setModalQuit={setModalQuit} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Info