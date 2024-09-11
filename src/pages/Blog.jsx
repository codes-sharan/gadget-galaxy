// import React from 'react';
import BlogCard from "./BlogCard";
import BlogList from "./BlogList"; // Import the BlogList array

const Blog = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Gadget News</h1>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogList.length === 0 ? (
            <p className="col-span-full text-center text-gray-700">
              No blog posts available.
            </p>
          ) : (
            BlogList.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                summary={blog.summary}
                image={blog.image}
                date={blog.date}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
