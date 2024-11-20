// src/components/NavbarVertical.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import musicNoteOutline from '@iconify/icons-mdi/music-note-outline';
import imageOutline from '@iconify/icons-mdi/image-outline';
import fullscreenOutline from '@iconify/icons-mdi/fullscreen';
import fullscreenExitOutline from '@iconify/icons-mdi/fullscreen-exit';
import View from '../pages/view';
import Music from '../pages/music'; // Import the Music component

const NavbarVertical = ({ activeFeature, setActiveFeature, setBackgroundImage, setIsImageSelected }) => {
  const [showView, setShowView] = useState(false);
  const [showMusic, setShowMusic] = useState(false); // Track Music view visibility
  const [isFullScreen, setIsFullScreen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (buttonName, path = null) => {
    setActiveFeature(buttonName); // Set the active feature directly here
    
    if (buttonName === 'View') {
      setShowView(true);
      setShowMusic(false);
      setIsImageSelected(true);
    } else if (buttonName === 'Music') {
      setShowMusic(true);
      setShowView(false);
      setIsImageSelected(true);
    } else if (buttonName === 'Full') {
      // Handle fullscreen toggle separately
      toggleFullScreen();
    } else {
      setShowView(false);
      setShowMusic(false);
      setIsImageSelected(false);
      if (path) navigate(path);
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
        setActiveFeature('Full');
      }).catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
        setActiveFeature(null);
      }).catch((err) => {
        console.error(`Error attempting to disable full-screen mode: ${err.message}`);
      });
    }
  };

  return (
    <>
      { /* Navbar is controlled by App.js's showNavbar, no need for internal isVisible */ }
      <div
        className={`fixed top-1/3 right-10 transform bg-black bg-opacity-80 text-[#D0D0D0] py-3 px-4 flex flex-col space-y-4 rounded-2xl transition-transform transition-opacity duration-500`}
        style={{ zIndex: 1000 }}
      >
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeFeature === 'Music' ? 'text-[#ECFF98]' : ''
          }`}
          onClick={() => handleNavigation('Music')}
        >
          <Icon
            icon={musicNoteOutline}
            className={`w-6 h-6 ${
              activeFeature === 'Music' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'
            }`}
          />
          <span className="text-lg">Music</span>
        </button>
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeFeature === 'View' ? 'text-[#ECFF98]' : ''
          }`}
          onClick={() => handleNavigation('View')}
        >
          <Icon
            icon={imageOutline}
            className={`w-6 h-6 ${
              activeFeature === 'View' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'
            }`}
          />
          <span className="text-lg">View</span>
        </button>
        <button
          className={`flex flex-col items-center space-y-1 ${
            activeFeature === 'Full' ? 'text-[#ECFF98]' : ''
          }`}
          onClick={() => handleNavigation('Full')}
        >
          <Icon
            icon={isFullScreen ? fullscreenExitOutline : fullscreenOutline}
            className={`w-6 h-6 ${
              activeFeature === 'Full' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'
            }`}
          />
          <span className="text-lg">{isFullScreen ? 'Exit' : 'Full'}</span>
        </button>
      </div>
      
      {showView && (
        <View setBackgroundImage={setBackgroundImage} setIsImageSelected={setIsImageSelected} />
      )}
      {showMusic && (
        <Music setBackgroundImage={setBackgroundImage} setIsImageSelected={setIsImageSelected} />
      )}
    </>
  );
};

export default NavbarVertical;
