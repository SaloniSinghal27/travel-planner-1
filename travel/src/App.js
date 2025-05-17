import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';       // Import Home component
import Planner from './pages/Planner'; 
import About from './pages/About';    
import Contact from './pages/Contact'; 
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />       {/* Home route */}
        <Route path="/planner" element={<Planner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
