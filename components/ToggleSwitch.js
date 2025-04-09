// src/components/ToggleSwitch.js
import React from 'react';

const ToggleSwitch = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
    >
      {darkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ToggleSwitch;
