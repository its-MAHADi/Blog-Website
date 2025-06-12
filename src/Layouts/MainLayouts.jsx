import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'

const MainLayouts = () => {
  return (
    <div>
        <Navbar></Navbar>
     <div className='min-h-[calc(100vh-374px)]'>
          <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayouts
