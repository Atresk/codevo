import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GlitchEffectInjector from './utils/GlitchEffectInjector';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Learn from './pages/Learn';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleGlobalClick = (e) => {
    const inNavbar = e.target.closest('.navbar');
    const inSidebar = e.target.closest('.sidebar');
    const inBtn = e.target.closest('.sidebar-toggle button');
    if (!inSidebar && !inBtn && !inNavbar) {
      setSidebarOpen(false);
    }
  };

  return (
    <Router>
        <GlitchEffectInjector />
      <div onClick={handleGlobalClick}>
        <Navbar />
        <div className="sidebar-toggle">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
        </div>
        <Sidebar open={sidebarOpen} />

        <Routes>
          <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
          <Route path="/Learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
