import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Container from 'react-bootstrap/Container';
import { IsMobileProvider } from './context/IsMobileContext';

function App() {
  
  return (
    <IsMobileProvider>
      <div className="app-container">
        <Navigation/>
        <Container className="routes-container">
          <Routes>
            <Route
              path='/'
              element={
                <Home />
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/projects/:project_id/video' element={<Video />} />
            <Route path='/contact' element={<ContactInfo />} />
            <Route
              path='/projects'
              element={
                <ProjectsContainer />
              }
            />
          </Routes>
        </Container>
      </div>
    </IsMobileProvider>
  );
}

export default App;
