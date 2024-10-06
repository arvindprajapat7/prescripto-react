import React from 'react'
import SectionHeading from '../sec-heading/SectionHeading'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContet';
import DoctorCard from '../doctor-card/DoctorCard';


const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useAppContext()
  return (
    <>
    <div className='container mx-auto py-5'>
        <div className='text-center mt-16'>
            <SectionHeading title="Top Doctors to Book" subTitle="Simply browse through our extensive list of trusted doctors."/>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8'>
            {
                doctors?.slice(0,10).map((item, index)=>{
                    return(

                       <DoctorCard item={item} key={index}/>
                        
                    )
                })
            }
        </div>
        <div className='my-4 flex justify-center'>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-gray-200 px-8 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300'>more</button></div>
        </div>
    </>
  )
}

export default TopDoctors