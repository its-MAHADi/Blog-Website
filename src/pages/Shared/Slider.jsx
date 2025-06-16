import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules'
import { Typewriter } from 'react-simple-typewriter';

const Slider = ({ blogs}) => {
  return (
     <div className="max-w-8xl w-full mx-auto mt-16">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          }
        }}
      >
        {
          blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <div className="relative rounded overflow-hidden group shadow-lg">
                <img src={blog.imageUrl} alt="" className="w-full h-screen object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 space-y-2">
                <h1 className='text-xl font-semibold'>
                  <Typewriter
                   words={['Explore Inspiring Blogs',
                         'Share Your Voice With the World',
                         'Fuel Your Curiosity Daily',
                         'Learn Something New Every Day',
                         'Stay Updated with the Latest Trends']}
                   loop={true}
                   cursor
                   cursorStyle='_'
                   typeSpeed={70}
                   deleteSpeed={50}
                   delaySpeed={1000}
                 />
                </h1>
                  <h2 className="text-3xl font-bold">{blog.title}</h2>
                  <p className="text-xm">{blog.shortDesc.slice(0, 100)}...</p>
                  <button to="/create-group" className="mt-2 px-4 py-1 bg-amber-500 hover:bg-indigo-600 hover:text-white text-black cursor-pointer font-semibold rounded">
                    Create Hobbys
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slider
