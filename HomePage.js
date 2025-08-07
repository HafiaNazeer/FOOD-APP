import React from 'react';
import MealsList from '../components/MealsList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Food Delivery App</h1>
      <MealsList />
      <Link to="/cart">
        <button style={{ marginTop: '20px' }}>View Cart</button>
      </Link>
    </div>
  );
};

export default HomePage;
