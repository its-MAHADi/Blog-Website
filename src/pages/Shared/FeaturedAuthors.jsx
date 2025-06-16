// FeaturedAuthors.jsx
import React from 'react';
import { motion } from 'framer-motion';

const authors = [
  { name: "Mahadi Hasan", expertise: "Technology", image: "https://i.ibb.co/pvV3cKkj/mahadi.jpg" },
  { name: "Nadir on the go", expertise: "Travel & Lifestyle", image: "https://i.ibb.co/tMz5tYrn/nadiron.jpg" },
  { name: "Sadia Noor", expertise: "Health & Wellness", image: "https://i.pravatar.cc/100?img=5" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const FeaturedAuthors = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 px-6 max-w-6xl mx-auto rounded-xl">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">✍️ Meet Our Featured Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {authors.map((author, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white border border-gray-200 hover:border-blue-400 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-64 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-blue-200 overflow-hidden">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
            <p className="text-blue-500 font-medium mt-1">{author.expertise}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAuthors;
