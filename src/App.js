import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import Industry from './pages/industry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/industry" element={<Industry/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
