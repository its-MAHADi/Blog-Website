import React from 'react'
import Slider from './Shared/Slider'
import { useLoaderData } from 'react-router'

const Home = () => {
    const blogData = useLoaderData()
  return (
    <div>
     <Slider blogs={blogData}></Slider>
     
    </div>
  )
}

export default Home
