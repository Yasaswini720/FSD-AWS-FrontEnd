import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './login.css';    


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const HandleRegisterClick = () => {
    navigate('/register');
}




  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-icon">
              <FiUser />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">
              <FiLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
          <small>Not a member?</small>
        <button onClick={HandleRegisterClick} className="btn-login">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;