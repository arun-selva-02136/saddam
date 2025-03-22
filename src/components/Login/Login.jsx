import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      onClose(); 
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="overlay">
        <div className='main-container'>

        
      <div className="login-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input className='overlay-input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className='overlay-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className='login-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
