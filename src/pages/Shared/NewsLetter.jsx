import React, { useState } from 'react'
import toast from 'react-hot-toast';


const NewsLetter = () => {
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail('');
  };

  return (
    <div className="bg-gray-100 py-10 px-6 text-center rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-600">Get the latest blog updates straight to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full sm:w-2/3 rounded border border-gray-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
