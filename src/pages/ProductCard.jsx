// import React from "react";
import PropTypes from "prop-types";
import { useCart } from "./CartContext";

// A reusable ProductCard component
const ProductCard = ({
  id,
  name,
  price,
  description,
  image,
  brand,
  category,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-6">
        {/* Brand and Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-500">{brand}</span>
          <span className="text-sm font-semibold text-gray-500">
            {category}
          </span>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-semibold mb-2">{name}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Price */}
        <p className="text-lg font-bold mb-4">{price}</p>

        {/* Action Button */}
        <button
          onClick={() =>
            addToCart({ id, name, price, description, image, brand, category })
          }
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// PropTypes for type checking
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
