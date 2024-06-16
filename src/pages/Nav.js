

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../navbar';
import Home from './Home';
import About from './About';
import Nutrition from './Nutrion';

import Welcome from './Welcome';
import ContactForm from './Contactform';

const Start = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Start;
