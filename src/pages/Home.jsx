import React from 'react'
import Hero from '../components/hero/Hero'
import Speciality from '../components/speciality/Speciality'
import TopDoctors from '../components/top-doctors/TopDoctors'
import AppointmentBanner from '../components/appointment-banner/AppointmentBanner'

const Home = () => {
  return (
    <>
        <Hero/>
        <Speciality/>
        <TopDoctors/>
        <AppointmentBanner/>
    </>
  )
}

export default Home