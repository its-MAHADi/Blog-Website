import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router'

const AllBlogsCard = ({singleBlog}) => {
  return (
    <div>
        <Fade direction="up" cascade triggerOnce={true} duration={600}>
     
       <div  className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={singleBlog.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{singleBlog.category}</h2>
    <p className='text-[18px] text-blue-500 font-semibold'>{singleBlog.title}</p>
    <p>{singleBlog.shortDesc}</p>
    <div className="card-actions  py-1">
     <div className='flex items-center lg:gap-5 md:gap-5 gap-2 w-full'>
         <Link className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-2xl hover:text-white group hover:bg-gray-50">
    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative">Details</span>
    </Link>

      <Link className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">wishlist</span>
    </Link>
     </div>
    </div>
  </div>
</div>
      
           </Fade>
    </div>
  )
}

export default AllBlogsCard
