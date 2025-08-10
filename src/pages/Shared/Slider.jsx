import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';

const Slider = ({ blogs }) => {
  return (
    <div className="max-w-8xl w-full mx-auto mt-15">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay={true}
        interval={3000}
        stopOnHover
        swipeable
        emulateTouch
      >
        {blogs.map((blog) => (
          <div key={blog._id} className="relative rounded overflow-hidden group shadow-lg">
            <img src={blog.imageUrl} alt={blog.title} className="h-[400px] md:h-[500px] w-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 space-y-2 max-w-xl">
              <h1 className='text-xl font-semibold text-left'>
                <Typewriter
                  words={[
                    'Explore Inspiring Blogs',
                    'Share Your Voice With the World',
                    'Fuel Your Curiosity Daily',
                    'Learn Something New Every Day',
                    'Stay Updated with the Latest Trends'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <h2 className="text-3xl font-bold text-left">{blog.title}</h2>
              <p className="text-sm text-left">{blog.shortDesc.slice(0, 100)}...</p>
              <div className="text-left">
                <Link
                  to="/add-blog"
                  className="mt-2 inline-block px-4 py-1 bg-amber-500 hover:bg-indigo-600 hover:text-white text-black cursor-pointer font-semibold rounded"
                >
                  Create Blog
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
