import React from 'react'
import error from "../assets/404.gif"
import { Link} from 'react-router';

const ErrorPage = () => {
  return (
    <div className='flex justify-center py-12'>
      <div>
      <img className='w-[400px] rounded-xl shadow-xl' src={error} alt="" />
     <div className='text-center space-y-4 mt-5'>
      <p className='text-red-500 text-xl font-semibold'>Oops! The Page you're looking for doesn't exist</p>
      <Link to="/" className='btn bg-blue-500 text-white'>Go back Home</Link>
     </div>
      </div>
    </div>
  )
}

export default ErrorPage