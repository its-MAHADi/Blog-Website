import axios from "axios";
import { use, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
   const { user } = use(AuthContext)
   const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("https://blog-server-eight-taupe.vercel.app/all-blogs", {
        params: { category, search },
      });
      setBlogs(res.data);
    };
    fetchBlogs();
  }, [category, search]);

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
   // console.error("Failed to add to wishlist:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to add to wishlist.',
    });
  }
};


  return (
    <div className="max-w-7xl mx-auto p-4 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8 underline decoration-blue-500"> All Blogs</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full sm:w-48"
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>

        <input
          type="text"
          placeholder="Search by title"
          className="border p-2 rounded flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Fade key={blog._id} triggerOnce>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-600">{blog.category}</p>
                <p className="mt-2 text-gray-700">
                  {blog.shortDesc?.slice(0, 80)}...
                </p>

                {/* Buttons */}
                <div className="card-actions mt-4  py-1">
                    <div className='flex items-center lg:gap-10 md:gap-5 gap-2 w-full'>
                        <Link to={`/blog-details/${blog._id}`} className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-2xl hover:text-white group hover:bg-gray-50">
                   <span className="absolute left-0 block w-full h-0 transition-all bg-blue-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                   <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </span>
                   <span className="relative">Details</span>
                   </Link>
               
                     <button  onClick={() =>handleAddToWishlist(blog)} className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group cursor-pointer">
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
          </Fade>
        ))}
      </div>

    </div>
  );
};

export default AllBlogs;
