import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About This Blog</h2>
          <p className="text-sm">
            Our mission is to share insightful articles, ideas, and resources for curious minds. 
            From tech to lifestyle, we empower creators and readers through knowledge and storytelling.
          </p>
        </div>

        {/* Quick Links */}
         <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
           <div className="space-y-2 flex flex-col w-27">
          <NavLink className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/">Home</NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/add-blog">Add Blog</NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/all-blog">All blogs</NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Featured-blog"> Featured Blogs</NavLink>
           <NavLink  className={({isActive})=>(isActive? "border-b-2 text-white" : "")} to="/Wishlist"> Wishlist</NavLink>
           </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-sm">Have a question or suggestion? Reach out to us anytime!</p>
          <p className="text-sm mt-2">Email : contact@blogsite.com</p>
          <p className="text-xl font-semibold mt-2">Follow us on social media :</p>
          <div className="flex space-x-3 mt-2">
      <a href="https://www.facebook.com/mh.mahadi.921944/" target='_blank'><FaFacebook className='text-blue-500' size={24} /></a>
      <a href="https://github.com/its-MAHADi" target='_blank'><FaGithub size={24} /></a>
      <a href="https://www.instagram.com/__m_a_h_a_d_i___/" target='_blank'><FaInstagram className='text-pink-500' size={24} /></a>
      <a href=""><FaYoutube className='text-red-500' size={28} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} BlogSite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
