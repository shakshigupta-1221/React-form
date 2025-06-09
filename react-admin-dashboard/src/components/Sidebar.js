import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🛠 Dashboard</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calendar">📅 Calendar</Link>
        <Link to="/kanban">📋 Kanban</Link>
        <Link to="/charts">📈 Charts</Link>
        <Link to="/table">📊 Table</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
