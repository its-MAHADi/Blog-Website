
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const TipsSection = () => {
  const tips = [
    "Set aside dedicated reading time each day.",
    "Choose topics that genuinely interest you.",
    "Take notes or highlight important points.",
    "Discuss blogs with friends or in online groups.",
    "Follow your favorite authors for regular updates.",
    "Avoid distractions to stay focused while reading."
  ];

  return (
    <section className="bg-white py-10 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 underline decoration-blue-500 text-center">🧠 Blog Tips & Tricks</h2>
      <Fade cascade damping={0.1} triggerOnce>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {tips.map((tip, idx) => (
            <li
              key={idx}
              className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition duration-300 ease-in-out"
            >
              ✅ {tip}
            </li>
          ))}
        </ul>
      </Fade>
    </section>
  );
};

export default TipsSection;
