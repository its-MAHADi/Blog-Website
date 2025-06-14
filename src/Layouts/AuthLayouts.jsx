import React from 'react'
import Navbar from '../pages/Shared/Navbar'
import { Outlet } from 'react-router'

const AuthLayouts = () => {
  return (
    <div>
    <header>
        <Navbar></Navbar>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    </div>
  )
}

export default AuthLayouts
