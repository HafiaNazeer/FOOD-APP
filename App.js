// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ProjectBanner from './components/ProjectBanner';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ChefDashboard from './pages/ChefDashboard';
import AdminDashboard from './pages/AdminDashboard';
import TrackingPage from './pages/TrackingPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ProjectBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/chef-dashboard" element={<ChefDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/track-order" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
