import React, { use } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../provider/AuthProvider'
import axios from 'axios'
import Swal from 'sweetalert2'

const RecentBlog = ({ blogCards}) => {
     const { user } = use(AuthContext)
     const navigate = useNavigate();
     //wishlist
    const handleAddToWishlist = async (blog) => {
  if (!user?.email) {
    return Swal.fire({
      icon: 'warning',
      title: 'Login Required',
      text: 'Please log in to add to wishlist.',
    });
  }

  const wishlistItem = {
    blogId: blog._id,
    title: blog.title,
    imageUrl: blog.imageUrl,
    category: blog.category,
    shortDesc: blog.shortDesc,
    longDesc: blog.longDesc,
    email: user.email,
  };

  try {
    const res = await axios.post("https://blog-server-eight-taupe.vercel.app/wishlist", wishlistItem);
    if (res.data.insertedId) {
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Blog has been added to your wishlist.',
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/wishlist");
    }
  } catch (error) {
    console.error("Failed to add to wishlist:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to add to wishlist.',
    });
  }
};


  return (
    <div className='my-7'>
      <h1 className='text-3xl font-bold text-center my-6'>Recent blog posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
           <Fade direction="up" cascade triggerOnce={true} duration={600}>

              {
        blogCards.map((blogCard)=>(
            <div key={blogCard._id} className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={blogCard.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blogCard.category}</h2>
    <p className='text-[18px] text-blue-500 font-semibold'>{blogCard.title}</p>
    <p>{blogCard.shortDesc}</p>
    <div className="card-actions  py-1">
     <div className='flex items-center lg:gap-5 md:gap-5 gap-2 w-full'>
         <Link to={`/blog-details/${blogCard._id}`} className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-2xl hover:text-white group hover:bg-gray-50">
    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="relative">Details</span>
    </Link>

      <button onClick={() =>handleAddToWishlist(blogCard)} className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group cursor-pointer">
    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">wishlist</span>
    </button>
     </div>
    </div>
  </div>
</div>
        ))
      }

           </Fade>
        </div>
    </div>
  )
}

export default RecentBlog
