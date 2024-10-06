import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContet';
import RelatedDoctors from '../components/related-doctors/RelatedDoctors';

const Appointment = () => {
  const [docData, setDocData] = useState([]);
  const {docId} = useParams();
  const {doctors, currency} = useAppContext();

  const fetchDoctorDetail=()=>{
    const docRes = doctors.find((doc)=>{return doc._id === docId})
    setDocData(docRes)
  }
  useEffect(()=>{
    fetchDoctorDetail()
  },[docId, doctors])
  
  return (
    <>
      <div className='container mx-auto md:flex gap-10'>
        <div className='max-w-[300px] bg-primary rounded-lg mb-4 flex items-end'>
          <img src={docData.image} alt={docData.name}/>
        </div>
        <div className='border border-gray-300 rounded-lg p-3'>
          <h4 className='text-4xl font-bold'>{docData.name}</h4>
          <p className='text-gray-600 text-sm flex items-center mt-3'>{docData.degree} :- {docData.speciality}<span className='bg-primary ml-5 font-medium text-white block rounded-full px-4 py-1 leading-2'>{docData.experience}</span></p>
          <h5 className='mt-4 font-bold text-2xl'>About</h5>
          <p className='text-[16px] text-gray-600'>{docData.about}</p>
          <h6 className='mt-4 font-bold'>Appointment Fee : {currency} {docData.fee}</h6>
        </div>
      </div>
      <br/>
      <RelatedDoctors/>
    </>
  )
}

export default Appointment