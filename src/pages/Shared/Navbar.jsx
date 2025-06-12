import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
   <div className="navbar p-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-box z-1 mt-5  w-52 p-2 shadow">
          <li>
              <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
            </li>
            <li>
               <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/add-blog">Add Blog</NavLink>
            </li>
            <li>
              <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-blog">All blogs</NavLink>
            </li>
            <li>
            <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Featured-blog"> Featured Blogs</NavLink>
            </li>
            <li>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Wishlist"> Wishlist</NavLink>
            </li>
      </ul>
    </div>
    <a className="font-bold text-2xl">.Blog</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="flex items-center  gap-6">
          <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/add-blog">Add Blog</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-blog">All blogs</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Featured-blog"> Featured Blogs</NavLink>
          <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Wishlist"> Wishlist</NavLink>
        </div>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
  )
}

export default Navbar
