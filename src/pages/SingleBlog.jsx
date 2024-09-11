// import React from 'react';
import { useParams } from "react-router-dom";
import BlogList from "./BlogList"; // Import the blog data

// Individual Blog Post Page
const SingleBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = BlogList.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Blog Post Content */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          {/* Content */}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <p className="text-gray-700">{blog.summary}</p>
            <br /> <br />
            <p className="text-gray-700"> {blog.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
