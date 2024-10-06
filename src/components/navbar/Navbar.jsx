import React, { useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../../../public/assets'
const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(true);
  return (
    <div className='container mx-auto'>
        <nav className='flex items-center justify-between py-4 mb-2 border-b border-b-gray-200'>
            <Link to='/' className='grow-1'>
                <img className='w-44 cursor-pointer' src={assets.logo} alt='logo'/>
            </Link>
            <ul className='grow-0 hidden md:flex gap-5 items-center justify-center font-medium'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3-5 m-auto hidden'/>
                </li>
                <li>
                    <NavLink to='/doctors'>All Doctors</NavLink>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3-5 m-auto hidden'/>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3-5 m-auto hidden'/>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3-5 m-auto hidden'/>
                </li>
            </ul>
            <div className='flex items-center gap-4 grow-1'> 
                {
                    token ? <div>
                        <div className='flex items-center gap-2 group relative'>
                            <img src={assets.profileIcon} alt='profile ' className='cursor-pointer w-8 h-8 object-cover rounded-full'/>
                            <img src={assets.downArrow} alt='down arrow' className='w-3 cursor-pointer'/>
                            <div className='absolute top-[100%]  right-0 z-10 w-44 bg-gray-200 py-2 hidden group-hover:block'>
                                <ul>
                                    <li>
                                        <NavLink to='my-profile' className='py-1 px-2 block text-gray-600 font-medium hover:text-black'>My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='my-appointment' className='py-1 px-2 block text-gray-600 font-medium hover:text-black'>My Appointments</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={()=>setToken(false)} className='py-1 px-2 block text-gray-600 font-medium hover:text-black'>Logout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : <button onClick={()=>navigate('login')} className='bg-primary text-white px-6 py-3 rounded-full hidden md:block'>Create Account</button>
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar