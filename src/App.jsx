import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<SingleBlog />} />{" "}
          {/* Route for individual blog posts */}
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}
