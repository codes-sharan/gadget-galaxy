// import React from 'react';
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, product) =>
      total + parseFloat(product.price.replace("$", "").replace(",", "")),
    0
  );

  return (
    <div className="fixed top-0 right-0 mt-16 mr-4 w-80 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
          <div className="mt-4 font-bold">Total: ${totalPrice.toFixed(2)}</div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
