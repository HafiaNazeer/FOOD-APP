// src/pages/RegisterPage.js
import React from 'react';
import './PageStyles.css';

const RegisterPage = () => (
  <div className="container">
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegisterPage;
