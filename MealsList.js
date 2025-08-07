// src/components/MealsList.js
import React, { useState } from 'react';
import './MealsList.css';
import axios from 'axios';

const meals = [
  { id: 1, name: "Thali", image: "/images/Thali.jpg", price: 250 },
  { id: 2, name: "Veg Biryani", image: "/images/Veg Biryani.jpg", price: 180 },
  { id: 3, name: "Cheese Burger", image: "/images/Cheese Burger.jpg", price: 100 },
  { id: 4, name: "Chicken Biryani", image: "/images/Chicken Biryani.jpg", price: 200 },
  { id: 5, name: "Masala Dosa", image: "/images/Masala Dosa.jpg", price: 80 },
  { id: 6, name: "Chole Bhature", image: "/images/Chole Bhature.jpg", price: 100 },
  { id: 7, name: "Rajma Chawal", image: "/images/Rajma Chawal.jpg", price: 120 },
  { id: 8, name: "Palak Paneer", image: "/images/Palak Paneer.jpg", price: 150 },
  { id: 9, name: "Aloo Paratha", image: "/images/Aloo Paratha.jpg", price: 50 },
]

const MealsList = () => {
  const [quantities, setQuantities] = useState({});

  const updateQuantity = (id, delta) => {
    setQuantities(prev => {
      const newQty = (prev[id] || 1) + delta;
      return { ...prev, [id]: newQty < 1 ? 1 : newQty }; // Prevent quantity < 1
    });
  };

  const handleAddToCart = async (meal) => {
    const quantity = quantities[meal.id] || 1;
    try {
      await axios.post('http://localhost:5000/api/cart', {
        mealId: meal.id,
        name: meal.name,
        price: meal.price,
        quantity: quantity,
      });
      alert(`${meal.name} x${quantity} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  return (
    <div className="meals-list">
      {meals.map(meal => (
        <div key={meal.id} className="meal-card">
          <img src={meal.image} alt={meal.name} className="meal-img" />
          <h3>{meal.name}</h3>
          <p>₹{meal.price}</p>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <button onClick={() => updateQuantity(meal.id, -1)}>-</button>
            <input
              type="number"
              min="1"
              value={quantities[meal.id] || 1}
              readOnly
              style={{ width: '50px', textAlign: 'center', margin: '0 5px' }}
            />
            <button onClick={() => updateQuantity(meal.id, 1)}>+</button>
          </div>

          <button onClick={() => handleAddToCart(meal)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
