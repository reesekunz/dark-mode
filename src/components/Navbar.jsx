import React, { useState } from 'react';
// import DarkMode hook 
import { useDarkMode } from "../hooks/useDarkMode"

const Navbar = () => {
  // Looking at this component, we are controlling the toggle with some state. The state hook here returns a `darkMode` value, and a `setDarkMode` function. 
  // Isn't that exactly what our `useDarkMode` hook returns as well? Replace the state hook with our hook, click the toggle, and watch the magic happen!!!
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
