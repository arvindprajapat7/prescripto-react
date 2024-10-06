import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Doctors } from './pages/Doctors'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <div className='mx-4'>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Doctors/>} path='/doctors'/>
        <Route element={<Doctors/>} path='/doctors/:speciality'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<MyAppointments/>} path='/my-appointment'/>
        <Route element={<MyProfile/>} path='/my-profile'/>
        <Route element={<Appointment/>} path='/appointment/:docId'/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
