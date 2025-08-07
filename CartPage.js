// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';
import './PageStyles.css';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cart');
      setCartItems(res.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <h4>{item.name} (x{item.quantity})</h4>
              <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
