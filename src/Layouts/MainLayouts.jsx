import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'

const MainLayouts = () => {
  return (
    <div className='max-w-7xl mx-auto px-1 '>
        <Navbar></Navbar>
     <div className='min-h-[calc(100vh-374px)] mx-auto'>
          <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayouts
