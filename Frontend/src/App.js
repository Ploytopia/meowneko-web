// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarHorizontal from './components/NavbarHorizontal';
import NavbarVertical from './components/NavbarVertical';
import Home from './pages/Home';
import Music from './pages/music';
import Timer from './pages/timer';
import Group from './pages/group';
import ToDo from './pages/to-do';
import Overview from './pages/overview';
import Fortune from './pages/fortune';
import Setting from './pages/setting';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeFeature, setActiveFeature] = useState(''); // Set a default empty value

  const [backgroundImage, setBackgroundImage] = useState('/background/Photo1.jpg'); // Initial background
  const [isImageSelected, setIsImageSelected] = useState(false); // Add this line

  const hideNavbarTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowNavbar(true);
      if (hideNavbarTimeout.current) clearTimeout(hideNavbarTimeout.current);
      hideNavbarTimeout.current = setTimeout(() => setShowNavbar(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideNavbarTimeout.current) clearTimeout(hideNavbarTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-container')) {
        setShowNavbar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {showNavbar && (
          <>
            <div className="navbar-container">
              <NavbarHorizontal activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
              <NavbarVertical 
                activeFeature={activeFeature} 
                setActiveFeature={setActiveFeature} 
                setBackgroundImage={setBackgroundImage}
                setIsImageSelected={setIsImageSelected} // Pass setIsImageSelected here
              />
            </div>
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/groups" element={<Group />} />
          <Route path="/to-do" element={<ToDo />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/fortune" element={<Fortune />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/music" element={<Music />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

         