import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcourses from './addcourses'
import Homepage from './homepage'
import Demodata from './demodata'
import Signuppage from './signuppage'
import Login from './login'
import Contactus from './Contactus'
import SingleCourse from './SingleCourse'
import Aboutus from './Aboutus'
import Showallcourses from './Showallcourses'
import Addallcourses from '../adminpanel/Addallcourses'
import Showcontact from '../adminpanel/Showcontact'
import Team from './team'

const Siteroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/addcourse' element={<Addcourses />} />
        <Route path='/demodata' element={<Demodata />} />
        <Route path='/signup' element={<Signuppage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/showallcourses' element={<Showallcourses />} />
        <Route path='/allcourses' element={<Addallcourses />} />
        <Route path="/showcontact" element={<Showcontact />} />
        <Route path='/team' element={<Team />} />
        <Route path='/details/:id' element={<SingleCourse />} />
      </Routes>

    </div>
  )
}

export default Siteroutes
