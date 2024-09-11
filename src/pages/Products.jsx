// import React, { useState } from 'react';
import ProductCard from "./ProductCard";
import ProductList from "./ProductList"; // Import the products array
import { CartProvider } from "./CartContext";
import Cart from "./Cart"; // Import the Cart component
import { useState } from "react";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = ProductList.filter((product) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.description.toLowerCase().includes(lowercasedQuery) ||
      product.brand.toLowerCase().includes(lowercasedQuery) ||
      product.category.toLowerCase().includes(lowercasedQuery)
    );
  });

  return (
    <CartProvider>
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full max-w-lg p-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>

          <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center text-gray-700">
                No products found.
              </p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  brand={product.brand}
                  category={product.category}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Cart /> {/* Display the cart */}
    </CartProvider>
  );
}
