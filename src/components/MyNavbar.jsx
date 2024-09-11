import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link

function MyNavbar() {
  const [dark, setDark] = useState(false);

  const themeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Top Header */}
      <header className="py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            <span>{currentDate}</span>
          </div>

          <div className="flex space-x-5">
            <div className="text-sm">
              <Link to="#" className="hover:underline">
                Login
              </Link>
              <span className="mx-2">|</span>
              <Link to="#" className="hover:underline">
                Sign Up
              </Link>
            </div>
            <div className="bg-gray-200">
              {" "}
              {/* Ensure the class is correct */}
              <button className="mr-5" onClick={themeHandler}>
                {dark ? <IoSunnyOutline /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex space-x-2">
            <Link to="/" className="text-2xl font-bold text-green-600">
              <img
                src="logo-no-bg.png"
                alt="Gadget Galaxy Logo"
                className="h-10"
              />
            </Link>

            <Link to="/" className="text-2xl font-bold text-green-600">
              Gadget <span className="text-black"> Galaxy </span>
            </Link>
          </div>
          <div className="md:flex space-x-6">
            <Link
              to="/products"
              className="text-gray-700 dark:text-white hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 dark:text-white hover:text-blue-600"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-white hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
