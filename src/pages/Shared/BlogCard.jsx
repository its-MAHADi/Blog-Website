import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router'

const BlogCard = ({blog}) => {
  return (
      <Fade  direction="left" ascade triggerOnce={true} duration={1000}>
      <div className="card lg:card-side bg-base-100 shadow-sm py-2 px-3 mt-20 border">
        <figure>
          <img src={blog.imageUrl} alt="Group" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <h1 className='font-semibold text-xl text-indigo-600'>{blog.category}</h1>
          <p> <span className='text-[15px] font-semibold'>Short Description :</span> <span className='text-gray-600'>{blog.shortDesc}</span></p>
         <div>
            <p className='text-[16px] font-semibold'>Long Description : </p>
             <p className='py-1'>{blog.longDesc}</p>
         </div>

        <div className=' flex lg:flex-row flex-col gap-5 '>
            
            <Link to="/"  className=" font-semibold rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
           <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
           <span className="relative">Back to Home</span>
           </Link>
        
         <Link className="inline-flex  items-center w-full px-5 py-2 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
         update
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </Link>
        </div>
        </div>


      </div>
    </Fade>
  )
}

export default BlogCard
