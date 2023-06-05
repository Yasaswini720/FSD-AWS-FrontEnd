import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import ImageDashboard from './Components/dashboard';
import AddImage from './Components/addimage';

function App() {
  return (
    
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ImageDashboard />} />
        <Route path="/add" element={<AddImage />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
