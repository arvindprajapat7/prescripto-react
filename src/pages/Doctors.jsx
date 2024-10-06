import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContet'
import DoctorCard from '../components/doctor-card/DoctorCard';
import { useNavigate, useParams } from 'react-router-dom';

export const Doctors = () => {
  const [filterDoctors, setFilterDoctors] = useState([])

  const {speciality} = useParams();
  const navigate  = useNavigate()
  const {doctors} = useAppContext();
  const uniqueSpeciality = [...new Set(doctors.map(item=>item.speciality))]

  const handleFilter=(sp)=>{
    console.log(sp)
    console.log('speciality : ' + speciality)
    speciality === sp ? navigate(`/doctors`) : navigate(`/doctors/${sp}`)
  }
  useEffect(()=>{
    if(speciality){
      setFilterDoctors(doctors.filter(doc=> doc.speciality===speciality))
    }else{
      setFilterDoctors(doctors)
    }

  },[speciality])          
  return (
    <>
      <div className='flex gap-10 items-start'>
        <div className=' min-w-[300px] flex flex-col gap-4 sticky top-16 transition-all duration-300'>
          {
            uniqueSpeciality.map((sp, index)=>{
              return <p onClick={()=>handleFilter(sp)}  className={`border rounded-lg cursor-pointer p-2 ${speciality === sp ? 'bg-primary text-white border-primary' : ''}`} key={index}>{sp}</p>
            })
          }
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {
            filterDoctors?.map((doctor, index)=>{
              return(
                <DoctorCard item={doctor} key={index}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
