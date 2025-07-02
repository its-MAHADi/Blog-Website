import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'
import Loading from '../pages/Loading'

const MainLayouts = () => {
    const {state} = useNavigation();
  return (
    <div className='max-w-7xl mx-auto '>
        <Navbar></Navbar>
     <div className='min-h-[calc(100vh-374px)] mx-auto'>
           {state=="loading"? <Loading/> : <Outlet></Outlet> }
     </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayouts
