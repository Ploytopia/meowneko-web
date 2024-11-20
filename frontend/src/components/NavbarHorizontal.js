// src/components/NavbarHorizontal.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import clockOutline from '@iconify/icons-mdi/clock-outline';
import accountGroupOutline from '@iconify/icons-mdi/account-group';
import clipboardListOutline from '@iconify/icons-mdi/clipboard-list';
import catIcon from '@iconify/icons-mdi/cat';
import crystalBallOutline from '@iconify/icons-mdi/crystal-ball';
import cogOutline from '@iconify/icons-mdi/cog';

const NavbarHorizontal = ({ activeFeature, setActiveFeature }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        timerRef.current = null;
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  // เมื่อ isVisible เปลี่ยนเป็น false ให้รีเซ็ต activeFeature กลับไปเป็น null
  useEffect(() => {
    if (!isVisible) {
      setActiveFeature(null);
    }
  }, [isVisible, setActiveFeature]);


  const handleNavigation = (buttonName, path) => {
    setActiveFeature(buttonName);
    navigate(path);
  };

  return (
    <div
    className={`fixed top-10 left-1/2 transform -translate-x-1/2 ${
      isVisible ? 'translate-y-0 opacity-80' : '-translate-y-full opacity-0'
    } bg-black bg-opacity-80 text-[#D0D0D0] px-4 py-3 flex space-x-4 rounded-3xl transition-all duration-500`}
    style={{ zIndex: 10 }}
    >
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('Timer', '/timer')}
      >
        <Icon
          icon={clockOutline}
          className={`w-6 h-6 ${activeFeature === 'Timer' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'Timer' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>Timer</span>
      </button>
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('Groups', '/groups')}
      >
        <Icon
          icon={accountGroupOutline}
          className={`w-6 h-6 ${activeFeature === 'Groups' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'Groups' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>Groups</span>
      </button>
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('To-do', '/to-do')}
      >
        <Icon
          icon={clipboardListOutline}
          className={`w-6 h-6 ${activeFeature === 'To-do' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'To-do' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>To-do</span>
      </button>
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('Overview', '/overview')}
      >
        <Icon
          icon={catIcon}
          className={`w-6 h-6 ${activeFeature === 'Overview' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'Overview' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>Overview</span>
      </button>
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('Fortune', '/fortune')}
      >
        <Icon
          icon={crystalBallOutline}
          className={`w-6 h-6 ${activeFeature === 'Fortune' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'Fortune' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>Fortune</span>
      </button>
      <button
        className="flex flex-col items-center space-y-1 w-20"
        onClick={() => handleNavigation('Setting', '/setting')}
      >
        <Icon
          icon={cogOutline}
          className={`w-6 h-6 ${activeFeature === 'Setting' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}
        />
        <span className={`text-lg ${activeFeature === 'Setting' ? 'text-[#ECFF98]' : 'text-[#D0D0D0]'}`}>Setting</span>
      </button>
    </div>
  );
};

export default NavbarHorizontal;
