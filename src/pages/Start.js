import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar';
import Home from './Home';
import About from './About';
import Nutrition from './Nutrion';
import Age from './Age';

const Start = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/age" element={<Age />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Start;
