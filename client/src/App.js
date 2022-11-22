import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/projects/:project_id/video' element={<Video />} />
        <Route path='/contact' element={<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
