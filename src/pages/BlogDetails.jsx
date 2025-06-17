import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router';
import BlogCard from './Shared/BlogCard';
import Navbar from './Shared/Navbar';
import CommentCard from './Shared/CommentCard';


const BlogDetails = () => {
      const blogDetails = useLoaderData();
    const {id} = useParams();
    const [blog , setBlogs] = useState({});
    // console.log(groupDetails,id, group)
  
    useEffect(()=>{
      const cardDetails=blogDetails.find((singleBlog)=>singleBlog._id ==id);
      setBlogs(cardDetails)
    },[blogDetails ,id])

  return (
    <div>
        <header>
        <Navbar></Navbar>
     </header>
      <main className='w-11/12 mx-auto py-8'>
      <BlogCard blog={blog}></BlogCard>
       <CommentCard blog={blog}></CommentCard>
      </main>
    </div>
  )
}

export default BlogDetails
