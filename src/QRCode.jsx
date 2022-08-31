import React from 'react'
import qrImg from './assets/qr-code-img.png'

const QRCode = () => {
    return (
        <div className='w-[330px] h-[510px] bg-white rounded-2xl shadow-md flex flex-col justify-center items-center'>
            <img className='w-[294px]' src={qrImg} alt="/" />
            <h1 className=' text-xl font-bold text-center mt-6 mb-3 px-4'>Improve your front-end skills by building projects</h1>
            <p className=' text-[#676363] text-sm font-medium text-center px-5 mb-3'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default QRCode