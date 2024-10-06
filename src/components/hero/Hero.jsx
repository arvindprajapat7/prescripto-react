import React from 'react'
import { assets } from '../../../public/assets'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
  return (
    <header>
        <div className='container mx-auto bg-primary px-4 md:px-8 pt-10 rounded-lg md:flex '>
            <div className='flex flex-col gap-4 md:w-1/2 py-4 lg:py-36'>
                <h3 className='text-3xl lg:text-4xl font-semibold text-white text-center md:text-left'>Book Appointment <br className='hidden md:block'/>
                With Trusted Doctors</h3>
                <div className='flex flex-col lg:flex-row text-center md:text-left'>
                    <div className='img-group mr-5'>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-12 h-12'>
                                <img src={assets.profileIcon} alt='profile icon image' className='w-full h-full object-cover border border-2 border-white rounded-full'/>
                            </div>
                            <div className='w-12 h-12 -ml-5'>
                                <img src={assets.profileImg2} alt='profile icon image' className='w-full h-full object-cover border border-2 border-white rounded-full'/>
                            </div>
                            <div className='w-12 h-12 -ml-5'>
                                <img src={assets.profileImg3} alt='profile icon image' className='w-full h-full object-cover border border-2 border-white rounded-full'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-white font-light'>Simply browse through our extensive list of trusted doctors, <br className='hidden lg:block'/>
                    schedule your appointment hassle-free.</p>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <Link to='' className='bg-white flex items-center gap-3 py-3 px-6 rounded-3xl font-medium hover:scale-105 translate-x-2 duration-500 group'>
                        Book appointment
                        <FaArrowRight className='group-hover:translate-x-2 transition-all duration-300'/>
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2 relative'>
                <img src={assets.heroImage} alt='hero image ' className='mx-auto md:absolute bottom-0 h-auto w-full'/>
            </div>
        </div>
    </header>
  )
}

export default Hero