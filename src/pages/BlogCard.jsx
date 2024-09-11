// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// A reusable BlogCard component
const BlogCard = ({ id, title, summary, image, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-6">
        {/* Title and Date */}
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{date}</p>

        {/* Summary */}
        <p className="text-gray-700 mb-4">{summary}</p>

        {/* Read More Link */}
        <Link
          to={`/blog/${id}`}
          className="text-blue-500 hover:text-blue-600 font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

// PropTypes for type checking
BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
