import React, { useContext, useState, useRef } from 'react';
import { CartContext } from './../../context/cartcontext';

const Cart = () => {
  const { cart, cartCount, handleDeleteItem, updateQuantity } = useContext(CartContext);

  const [showQuantityOptions, setShowQuantityOptions] = useState({});
  const inputRefs = useRef({});

  const handleToggleQuantityOptions = (productId) => {
    setShowQuantityOptions((prevOptions) => ({
      ...prevOptions,
      [productId]: !prevOptions[productId],
    }));

    if (!showQuantityOptions[productId]) {
      setTimeout(() => {
        if (inputRefs.current[productId]) {
          inputRefs.current[productId].focus();
        }
      }, 100);
    }
  };

  const handleQuantityChange = (event, productId) => {
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    updateQuantity(productId, newQuantity);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <p>Total Items: {cartCount}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.thumbnail} alt={item.title} className="w-25 me-3" />
                  <div>
                    <strong>{item.title}</strong> - ${item.price} x {item.quantity}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => handleToggleQuantityOptions(item.id)}
                  >
                    Edit Quantity
                  </button>
                  {showQuantityOptions[item.id] && (
                    <div className="mt-2">
                      <input
                        ref={(el) => (inputRefs.current[item.id] = el)}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(e, item.id)}
                        className="form-control"
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
