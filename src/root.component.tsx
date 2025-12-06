import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExtraPlaceholderSlide from './slides/ExtraPlaceholderSlide';
import './slides.css';

export default function Root() {
  return (
    <Router>
      <div className="slide-container">
        <Routes>
          {/* Extra section */}
          <Route path="/extra" element={<ExtraPlaceholderSlide />} />
        </Routes>
      </div>
    </Router>
  );
}
