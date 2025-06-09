import React from 'react';

function Navbar({ toggleTheme, darkMode }) {
  return (
    <div className="navbar">
      <h1>Admin Dashboard</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default Navbar;
