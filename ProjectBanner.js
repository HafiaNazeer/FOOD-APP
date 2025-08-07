// src/components/Banner.js
import React from 'react';
import './ProjectBanner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Welcome to FlavorNest</h1>
        <h3 className="banner-subtitle">Homemade Meals, Delivered Fresh</h3>
        <p className="banner-description">
          Explore authentic, chef-made dishes delivered right to your door — crafted with care, made for flavor.
        </p>
      </div>
    </div>
  );
};

export default Banner;
