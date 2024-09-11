// import React from 'react';

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16 md:py-24 ">
      <div className="absolute inset-0">
        <img
          src="h3.png" // Update with your background image
          alt="Gadget Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the Latest Gadgets
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore cutting-edge smartphones, headphones and smartwatches
            designed to enhance your tech experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/blog"
              className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
