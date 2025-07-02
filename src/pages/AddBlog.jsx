import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const navigate = useNavigate();

 const handleBlogSubmit = e =>{
   e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const blogdata = Object.fromEntries(formData.entries())
    // console.log(blogdata)

    //send blog data to the db
    axios.post('https://blog-server-eight-taupe.vercel.app/blogs',blogdata)
    .then(res =>{
        if (res.data.insertedId){
          Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Blog added successful!",
        showConfirmButton: false,
        timer: 1500
         });
          navigate("/all-blog");
        }
         form.reset();
         
    })
    .catch(error =>{
      console.log(error)
    })
   
 }


  return (
     <form onSubmit={handleBlogSubmit} className="max-w-2xl mx-auto mt-16 p-4 my-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8 underline decoration-blue-300">Create New Blog</h2>

      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        className="w-full border rounded px-4 py-2"
        required
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        className="w-full border rounded px-4 py-2"
        required
      />

         <select
      id="category"
      name="category"
      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    >
      <option value="">Select Category</option>
      <option value="Technology">Technology</option>
      <option value="Travel">Travel</option>
      <option value="Food">Food</option>
      <option value="Health">Health</option>
      <option value="Education">Education</option>
      <option value="Lifestyle">Lifestyle</option>
      <option value="Business">Business</option>
      <option value="Finance">Finance</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Sports">Sports</option>
     </select>

      <textarea
        name="shortDesc"
        placeholder="Short Description"
        className="w-full border rounded px-4 py-2"
        rows={2}
        required
      />

      <textarea
        name="longDesc"
        placeholder="Long Description"
        className="w-full border rounded px-4 py-2"
        rows={5}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded cursor-pointer"
      >
        Submit Blog
      </button>
    </form>
  )
}

export default AddBlog
