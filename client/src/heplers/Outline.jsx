import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'
function Outline() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Outline