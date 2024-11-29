// src/pages/Music.js
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import sleepyIcon from '@iconify/icons-mdi/weather-night';
import chillIcon from '@iconify/icons-mdi/cup-water';
import classicIcon from '@iconify/icons-mdi/music-clef-treble';
import volumeHigh from '@iconify/icons-mdi/volume-high';
import volumeLow from '@iconify/icons-mdi/volume-low';
import pawIcon from '@iconify/icons-mdi/paw';

const Music = () => {
  const [volume, setVolume] = useState(50);
  const [backgroundVolume, setBackgroundVolume] = useState(50);
  const [backgroundNoise, setBackgroundNoise] = useState({
    cityTraffic: false,
    cityRain: false,
    fireplace: false,
  });

  const toggleBackgroundNoise = (noiseType) => {
    setBackgroundNoise((prevNoise) => ({
      ...prevNoise,
      [noiseType]: !prevNoise[noiseType],
    }));
  };

  return (
    <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg max-w-xs mx-auto mt-10 shadow-lg fixed right-20 mr-10 top-[40%] transform -translate-y-1/2"
      style={{ zIndex: 1000 }} >
      <h3 className="text-lg font-semibold mb-4">Change Music</h3>
      <div className="flex justify-around items-center mb-4">
        <button className="flex flex-col items-center">
          <Icon icon={sleepyIcon} className="w-6 h-6 mb-1" />
          <span className="text-sm">Sleepy</span>
        </button>
        <button className="flex flex-col items-center">
          <Icon icon={chillIcon} className="w-6 h-6 mb-1" />
          <span className="text-sm">Chill</span>
        </button>
        <button className="flex flex-col items-center">
          <Icon icon={classicIcon} className="w-6 h-6 mb-1" />
          <span className="text-sm">Classic</span>
        </button>
      </div>

      <div className="flex items-center mb-4">
        <Icon icon={volumeLow} className="w-5 h-5 mr-2" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="flex-grow"
        />
        <Icon icon={volumeHigh} className="w-5 h-5 ml-2" />
      </div>

      <h3 className="text-lg font-semibold mb-4">Background noise</h3>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm">City traffic</span>
        <div
          className={`switch ${backgroundNoise.cityTraffic ? 'bg-on' : 'bg-off'}`}
          onClick={() => toggleBackgroundNoise('cityTraffic')}
        >
          <Icon
            icon={pawIcon}
            className={`paw-icon ${backgroundNoise.cityTraffic ? 'icon-on' : 'icon-off'}`}
          />
        </div>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm">City rain</span>
        <div
          className={`switch ${backgroundNoise.cityRain ? 'bg-on' : 'bg-off'}`}
          onClick={() => toggleBackgroundNoise('cityRain')}
        >
          <Icon
            icon={pawIcon}
            className={`paw-icon ${backgroundNoise.cityRain ? 'icon-on' : 'icon-off'}`}
          />
        </div>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm">Fireplace</span>
        <div
          className={`switch ${backgroundNoise.fireplace ? 'bg-on' : 'bg-off'}`}
          onClick={() => toggleBackgroundNoise('fireplace')}
        >
          <Icon
            icon={pawIcon}
            className={`paw-icon ${backgroundNoise.fireplace ? 'icon-on' : 'icon-off'}`}
          />
        </div>
      </div>

      {/* Background noise volume control */}
      <div className="flex items-center mt-4">
        <Icon icon={volumeLow} className="w-5 h-5 mr-2" />
        <input
          type="range"
          min="0"
          max="100"
          value={backgroundVolume}
          onChange={(e) => setBackgroundVolume(e.target.value)}
          className="flex-grow"
        />
        <Icon icon={volumeHigh} className="w-5 h-5 ml-2" />
      </div>
    </div>
  );
};

export default Music;
