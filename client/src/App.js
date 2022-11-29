import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Video from './components/Video';
import ContactInfo from './components/ContactInfo';
import Navigation from './components/Navigation';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Container from 'react-bootstrap/Container';

function App() {

  let oldScrollY = 0;
  const [isMobile, setIsMobile] = useState(false);
  const [hideNav, setHideNav] = useState(false);


  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const handleHideNav = (e) => {
    if(window.scrollY > oldScrollY) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHideNav);
    return () => {
        window.removeEventListener('scroll', handleHideNav);
    };
  },[]);

  
  return (
    <div className="app-container">
      <Navigation isMobile={isMobile} hideNav={hideNav}/>
      <Container className="routes-container">
        <Routes>
          <Route
            path='/'
            element={
              <Home
                isMobile={isMobile}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/projects/:project_id/video' element={<Video />} />
          <Route path='/contact' element={<ContactInfo />} />
          <Route
            path='/projects'
            element={
              <ProjectsContainer
                isMobile={isMobile}
              />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
