// LoginForm.js
import React from 'react';
import './App.css';

function LoginForm() {
  return (
    <div className="LoginForm">
      <h3>Log In</h3>
      <input type="text" placeholder="Enter your username" />
      <input type="password" placeholder="Enter your password" />
    </div>
  );
}

export default LoginForm;
