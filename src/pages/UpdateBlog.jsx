import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';
import Navbar from './Shared/Navbar';
import Swal from 'sweetalert2';

const UpdateBlog = () => {
    const {_id,title,category,imageUrl,shortDesc,longDesc,} = useLoaderData()
    const navigate = useNavigate();
    const handleUpdateBlog = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateBlog = Object.fromEntries(formData.entries())
    console.log(updateBlog)

  //send updated group to the db
    fetch(`http://localhost:3000/all-blogs/${_id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updateBlog)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
          Swal.fire({
          position: "top-bottom",
          icon: "success",
          title: "Blog updated successfully!",
          showConfirmButton: false,
          timer: 1500
           });
            navigate("/all-blog");
        }
    })

    }
    
  
  return (
    <div>
        <Navbar></Navbar>
       <form onSubmit={handleUpdateBlog} className="max-w-2xl mx-auto mt-16 p-4 my-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Blog</h2>

      <input
        type="text"
        name="title"
        defaultValue={title}
        placeholder="Blog Title"
        className="w-full border rounded px-4 py-2"
        required
      />

      <input
        type="text"
        name="imageUrl"
        defaultValue={imageUrl}
        placeholder="Image URL"
        className="w-full border rounded px-4 py-2"
        required
      />

         <select
      id="category"
      name="category"
      defaultValue={category}
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
        defaultValue={shortDesc}
        placeholder="Short Description"
        className="w-full border rounded px-4 py-2"
        rows={2}
        required
      />

      <textarea
        name="longDesc"
        defaultValue={longDesc}
        placeholder="Long Description"
        className="w-full border rounded px-4 py-2"
        rows={5}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        update
      </button>
    </form>
    </div>
  )
}

export default UpdateBlog
