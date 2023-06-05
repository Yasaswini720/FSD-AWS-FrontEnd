import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Register.css';    


const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Register button clicked');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <div className="Register-container">
      <div className="Register-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="name"
              placeholder="Full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            </div>
            <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-Register">Register</button>

        </form>
      </div>
    </div>
  );
};

export default Register;