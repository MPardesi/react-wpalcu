import React from 'react';
import './style.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    // <div>
    //   <Home />
    //   <Contact />
    //   <Aboutus />
    // </div>

    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}
