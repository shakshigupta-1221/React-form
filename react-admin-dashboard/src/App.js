import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'app-container dark' : 'app-container'}>
        <Sidebar />
        <div className="main-content">
          <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
