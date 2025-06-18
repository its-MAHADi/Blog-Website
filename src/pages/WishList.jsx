import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const WishList = () => {
  const { user } = use(AuthContext)
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/wishlist?email=${user.email}`)
        .then((res) => setWishlist(res.data));
    }
  }, [user]);

  const handleRemove = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to delete this group?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`http://localhost:3000/wishlist/${id}`);
      setWishlist((prev) => prev.filter((item) => item._id !== id));

      Swal.fire(
        'Deleted!',
        'The blog has been removed from wishlist.',
        'success'
      );
    } catch (error) {
      console.error("Error removing from wishlist", error);
      Swal.fire(
        'Failed!',
        'There was a problem removing the blog.',
        'error'
      );
    }
  }
};


  return (
    <div className="max-w-6xl mx-auto mt-16 p-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8 underline decoration-blue-300"> My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No wishlisted blogs yet.</p>
      ) : (
         <Fade direction="up" cascade damping={0.1} triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white rounded shadow p-4">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-gray-700 mt-1">{item.shortDesc?.slice(0, 70)}...</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Remove
                </button>
                <a
                  href={`/blog-details/${item.blogId}`}
                  className="bg-indigo-600 text-white px-4 py-1 rounded"
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
         </Fade>
      )}
    </div>
  );
};

export default WishList;
