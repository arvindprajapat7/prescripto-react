import React from 'react'
import { assets } from '../../../public/assets'
const AppointmentBanner = () => {
  return (
    <div className='container mx-auto my-10 bg-primary rounded-lg px-10 relative'>
        <div className='flex items-end'>
            <div className='md:w-1/2 py-10 text-center md:text-left'>
                <h3 className='text-white text-2xl lg:text-4xl xl:text-[50px] font-medium leading-10 xl:leading-[80px]'>Book Appointment<br className='hidden md:block'/> 
                With 100+ Trusted Doctors</h3>
                <button className='bg-white  py-3 px-6 rounded-3xl font-medium hover:scale-105 translate-x-2 duration-500 mt-10'>Create Account</button>
            </div>
            <div className='hidden md:block w-1/2 text-center'>
                <img src={assets.bannerDoctor} className='-mt-20'/>
            </div>
        </div>
    </div>
  )
}

export default AppointmentBanner