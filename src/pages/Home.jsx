import React from 'react'
import Slider from './Shared/Slider'
import { useLoaderData } from 'react-router'
import RecentBlog from './Shared/RecentBlog'
import NewsLetter from './Shared/NewsLetter'

const Home = () => {
    const blogData = useLoaderData()
  return (
    <div>
     <Slider blogs={blogData}></Slider>
     <RecentBlog key={blogData._id} blogCards={blogData}></RecentBlog>
     <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
