import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../provider/AuthProvider'
import userIcon from "../../assets/user.png"
import toast from 'react-hot-toast'

const Navbar = () => {
    const {user, logOut}=use(AuthContext);
     const handleLogOut=()=>{
    logOut().then(() => {
      toast.success('Logged out successfully!');
    }).catch((error) => {
      toast.error(`Logout failed: ${error.message}`);
    });
    }

  return (
   <div className="navbar fixed top-0 left-0 w-full z-50 p-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm">
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
    {/* <h1>{user && user.email}</h1> */}
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
  <div className="navbar-end gap-3">
    {/* <img className='rounded-full border-2'   src={user?.photoURL || userIcon} alt="" /> */}
     {user?.photoURL && (
        <img
          className="w-12 h-12 rounded-full border-2"
          src={user.photoURL}
          alt="User Profile"
        />
      )}

    {
        user? <button onClick={handleLogOut} className="btn btn-outline  btn-success text-white border-2 border-white">Logout</button> :  <Link to="/auth/login" className="btn btn-outline  btn-success text-white border-2 border-white">Login</Link>
    }
   
   {
    user?  <Link to="/auth/register" className="btn btn-outline btn-primary text-white border-2 border-white hidden">Register</Link> :  <Link to="/auth/register" className="btn btn-outline btn-primary text-white border-2 border-white">Register</Link>
   }
  </div>
</div>
  )
}

export default Navbar