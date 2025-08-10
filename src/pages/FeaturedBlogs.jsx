import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const FeaturedBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    axios.get('https://blog-server-eight-taupe.vercel.app/featured-blogs')
      .then(res => {
        const sorted = res.data.sort((a, b) =>
          sortAsc ? a.wordCount - b.wordCount : b.wordCount - a.wordCount
        );
        setTopBlogs(sorted);
      })
      .catch(err => console.error('Failed to fetch blogs:', err));
  }, [sortAsc]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8 underline decoration-blue-500">
       Top 10 Blogs by Word Count
      </h2>

      <div className="overflow-x-auto shadow-md border border-gray-200 rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-gray-800">
            <tr>
              <th className="p-4 text-left font-semibold">No</th>
              <th className="p-4 text-left font-semibold">Title</th>
              <th className="p-4 text-left font-semibold">Category</th>
              <th className="p-4 text-left font-semibold hidden md:table-cell">Long Description</th>
              <th
                className="p-4 text-center font-semibold cursor-pointer hover:text-blue-600"
                onClick={() => setSortAsc(!sortAsc)}
                title="Click to sort"
              >
                Word Count {sortAsc ? '⬆️' : '⬇️'}
              </th>
              <th className="p-4 text-center font-semibold">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {topBlogs.map((blog, index) => (
              <tr key={blog._id} className="hover:bg-blue-50 transition">
                <td className="p-4 text-center font-medium">{index + 1}</td>
                <td className="p-4">{blog.title}</td>
                <td className="p-4">{blog.category}</td>
                <td className="p-4 hidden md:table-cell text-gray-600 line-clamp-3">{blog.longDesc}</td>
                <td className="p-4 text-center text-blue-700 font-semibold">{blog.wordCount}</td>
                <td className="p-4 text-center">
                  <Link to={`/blog-details/${blog._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md shadow-md text-sm">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;