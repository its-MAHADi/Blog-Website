import React from 'react'
import Slider from './Shared/Slider'
import { useLoaderData } from 'react-router'
import RecentBlog from './Shared/RecentBlog'

const Home = () => {
    const blogData = useLoaderData()
  return (
    <div>
     <Slider blogs={blogData}></Slider>
     <RecentBlog key={blogData._id} blogCards={blogData}></RecentBlog>
    </div>
  )
}

export default Home
