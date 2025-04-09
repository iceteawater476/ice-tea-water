// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`flex justify-between items-center p-6 bg-[#F0F0F0] dark:bg-[#1A1A1A]`}>
      <h1 className="text-xl font-bold uppercase tracking-wide">Lumon Industries</h1>
      <nav className="flex gap-6">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
        <Link to="/videos" className="text-gray-700 dark:text-gray-300 hover:underline">Videos</Link>
        <Link to="/photos" className="text-gray-700 dark:text-gray-300 hover:underline">Photos</Link>
        <Link to="/vision" className="text-gray-700 dark:text-gray-300 hover:underline">Vision</Link>
        <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
        <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
        {darkMode ? <Sun className="w-5 h-5 text-gray-800 dark:text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800 dark:text-gray-400" />}
      </button>
    </header>
  );
};

export default Header;

