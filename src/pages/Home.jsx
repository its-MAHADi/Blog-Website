import React from 'react'
import Slider from './Shared/Slider'
import { useLoaderData } from 'react-router'
import RecentBlog from './Shared/RecentBlog'
import NewsLetter from './Shared/NewsLetter'
import TipsSection from './Shared/TipsSection'
import FeaturedAuthors from './Shared/FeaturedAuthors'

const Home = () => {
    const blogData = useLoaderData()
  return (
    <div>
     <Slider blogs={blogData}></Slider>
     <RecentBlog key={blogData._id} blogCards={blogData}></RecentBlog>
     <TipsSection></TipsSection>
     <FeaturedAuthors></FeaturedAuthors>
       <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
