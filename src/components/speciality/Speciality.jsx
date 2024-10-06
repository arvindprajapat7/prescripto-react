import React from 'react'
import SectionHeading from '../sec-heading/SectionHeading'
import specialityData from '../../../public/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <section className='py-10'>
        <div className='container mx-auto'>
            <div className='text-center mx-1/4'>
                <SectionHeading title="Find by Speciality " subTitle="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."/>
            </div>
            <div className='speciality-group flex gap-6 justify-center pt-6 overflow-scroll'>
                {
                    specialityData?.map((speciality_item, index)=>{
                        return(
                            <Link onClick={()=>scrollTo(0,0)} key={index} to={`doctors/${speciality_item.speciality}`} className='text-center hover:-translate-y-2 transition-all duration-300'>
                                <div className='w-24 h-24 rounded-full flex justify-center items-center bg-custom-gradient-1 overflow-hidden mx-auto'>
                                    <img src={speciality_item.image} alt={speciality_item.speciality} className='w-14'/>
                                </div>
                                <p className='text-[12px] mt-2'>{speciality_item.speciality}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Speciality