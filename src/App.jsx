// FILE: src/App.jsx

import { useState } from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <Home />
    </div>
  );
}

export default App;