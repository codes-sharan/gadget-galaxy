// src/components/Footer.js

// import React from 'react';

const MyFooter = () => {
  return (
    <footer className="bg-green-50 text-gray-800 py-8 dark:bg-gray-500 dark:text-slate-100 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Brand Name */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mb-2">Gadget Galaxy</h1>
            <p>Your ultimate destination for the latest gadgets.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-blue-600"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12h-4v-1.5c0-1.24 0.43-2 1.5-2h1.5v-3h-2.5c-2.76 0-5 2.24-5 5v1.5h-2.5v3h2.5v7h3v-7h2.5l.5-3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-blue-400"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 5.1c-.8.4-1.7.7-2.7.8 1-0.6 1.8-1.5 2.1-2.6-1 .6-2.1 1-3.2 1.2-1-1-2.4-1.7-3.9-1.7-3 0-5.5 2.4-5.5 5.4 0 .4 0 .7.1 1.1-4.6-.2-8.7-2.4-11.4-5.7-.5.8-.8 1.8-.8 2.8 0 1.9 1 3.5 2.5 4.5-.9 0-1.7-.3-2.5-.8 0 0 0 0 0 .1 0 2.7 1.9 5 4.4 5.5-.4.1-.8.1-1.2.1-.3 0-.7 0-1.1-.1.7 2.2 2.7 3.8 5.1 3.8 6.1 0 9.5-5.1 9.5-9.5 0-.1 0-.3 0-.4.7-.5 1.3-1.1 1.8-1.8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0.1 2.1.4 2.8 1.1.7.7 1 1.6 1.1 2.8 0.1 1.3 0.1 1.7 0.1 4.9 0 3.2 0 3.6-.1 4.9-.1 1.2-.4 2.1-1.1 2.8-.7.7-1.6 1-2.8 1.1-1.3.1-1.7.1-4.9.1-3.2 0-3.6 0-4.9-.1-1.2-.1-2.1-.4-2.8-1.1-.7-.7-1-1.6-1.1-2.8-.1-1.3-.1-1.7-.1-4.9 0-3.2 0-3.6.1-4.9.1-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.8-1.1 1.3-.1 1.7-.1 4.9-.1zm0-2.2c-3.3 0-3.7 0-5 0.1-1.7 0.1-3.2.8-4.4 2-1.2 1.2-1.9 2.7-2 4.4-0.1 1.3-0.1 1.7-0.1 5 0 3.3 0 3.7.1 5 0.1 1.7.8 3.2 2 4.4 1.2 1.2 2.7 1.9 4.4 2 1.3 0.1 1.7 0.1 5 0.1 3.3 0 3.7 0 5-0.1 1.7-0.1 3.2-0.8 4.4-2 1.2-1.2 1.9-2.7 2-4.4 0.1-1.3 0.1-1.7 0.1-5 0-3.3 0-3.7-0.1-5-0.1-1.7-0.8-3.2-2-4.4-1.2-1.2-2.7-1.9-4.4-2-1.3-0.1-1.7-0.1-5-0.1zm0 6.6c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zm0 8.5c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1zm5.1-8.6c-0.4 0-0.7-0.3-0.7-0.7s0.3-0.7 0.7-0.7 0.7 0.3 0.7 0.7-0.3 0.7-0.7 0.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Gadget Galaxy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
