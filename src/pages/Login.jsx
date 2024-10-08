import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('sign-up')
  return (
    <>
     <div className='w-[400px] shadow-lg rounded-lg p-4 mx-auto border my-20'>
     <h3 className='text-2xl font-medium text-gray-600'>{
          state === 'sign up' ? 'Create Account' : 'Login'
        }
      </h3>
      <p className='text-gray-500'>Please {state === 'sign up' ? 'sign up' : 'Login'} to book appointment</p>

      <div className='mt-4'>
      { state === 'sign up' &&
        <div className=''>
          <p className='text-gray-500 mb-2 text-[16px]'>FullName</p>
          <input type='text' className='border w-full p-2 rounded mb-6'/>
        </div>
      
      }
        <div className=''>
          <p className='text-gray-500 mb-2 text-[16px]'>Email</p>
          <input type='text' className='border w-full p-2 rounded mb-6'/>
        </div>
        <div className=''>
          <p className='text-gray-500 mb-2 text-[16px]'>Password</p>
          <input type='text' className='border w-full p-2 rounded mb-6'/>
        </div>
        <button className='bg-primary rounded text-white w-full py-2 font-medium cursor-pointer'>{state === 'sign up' ? 'Create Account' : 'Login'}</button>

        {
          state === 'sign up' ? <p className='text-gray-500 mt-3'>Already have an account <span className='text-primary cursor-pointer font-medium' onClick={()=>setState('login')}>Login</span></p>
          : <p className='text-gray-500 mt-3'>Dont have an account <span className='text-primary cursor-pointer font-medium' onClick={()=>setState('sign up')}>Sign Up</span></p>
        }
      </div>
     </div>
    </>
  )
}

export default Login