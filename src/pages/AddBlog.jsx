import axios from 'axios';
import Swal from 'sweetalert2';

const AddBlog = () => {

 const handleBlogSubmit = e =>{
   e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const blogdata = Object.fromEntries(formData.entries())
    // console.log(blogdata)

    // blogdata.status = "active"

    //send blog data to the db
    axios.post('http://localhost:3000/blogs',blogdata)
    .then(res =>{
        if (res.data.insertedId){
          Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Blog added successful!",
        showConfirmButton: false,
        timer: 1500
         });
        }
         form.reset();
    })
    .catch(error =>{
      console.log(error)
    })
   
 }


  return (
     <form onSubmit={handleBlogSubmit} className="max-w-2xl mx-auto mt-16 p-4 my-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Blog</h2>

      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        // value={blogData.title}
        // onChange={handleChange}
        className="w-full border rounded px-4 py-2"
        required
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        // value={blogData.imageUrl}
        // onChange={handleChange}
        className="w-full border rounded px-4 py-2"
        required
      />

         <select
      id="category"
      name="category"
      // value={blogData.category}
      // onChange={handleChange}
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
        // value={blogData.shortDesc}
        // onChange={handleChange}
        className="w-full border rounded px-4 py-2"
        rows={2}
        required
      />

      <textarea
        name="longDesc"
        placeholder="Long Description"
        // value={blogData.longDesc}
        // onChange={handleChange}
        className="w-full border rounded px-4 py-2"
        rows={5}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Submit Blog
      </button>
    </form>
  )
}

export default AddBlog
