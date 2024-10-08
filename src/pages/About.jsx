import React from 'react'
import SectionHeading from '../components/sec-heading/SectionHeading'
import { assets } from '../../public/assets'

const About = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <h3 className='text-4xl text-center my-10'>About <span className='text-primary font-bold'>Us</span></h3>
          <div className=' grid md:grid-cols-[2fr_3fr]'>
            <div className='md:mr-8'>
              <img src={assets.aboutImage} alt='' className='w-full'/>
            </div>
            <div className='text-[16px] text-gray-800'>
              <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
              <p className='my-4'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
              <h4 className='my-10 font-bold text-2xl'>Our Vision</h4>
              <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About