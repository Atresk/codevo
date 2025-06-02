import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footerbar from './components/Footerbar';
import Exercise from './pages/Exercise';
import About from './pages/About';
import Compiler from './pages/Compiler';
import Page from './pages/Page';

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
    <>
      <Router>
        <div onClick={handleGlobalClick}>
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
          <Sidebar open={sidebarOpen} />

          <Routes>
            <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
            <Route path="/Exercise" element={<Exercise />} />
            <Route path="/About" element={<About />} />
            <Route path="/Introduction" element={<Page path={'/docs/introduction.md'} />} />
            <Route path="/Compiler" element={<Compiler />} />
            <Route path="/Python/1" element={<Page path={'/docs/py1.md'} />} />
            <Route path="/JavaScript/1" element={<Page path={'/docs/js1.md'} />} />
            <Route path="/C++/1" element={<Page path={'/docs/cpp1.md'} />} />
            <Route path="/C++/2" element={<Page path={'/docs/cpp2.md'} />} />
            <Route path="/C++/3" element={<Page path={'/docs/cpp3.md'} />} />
            <Route path="/C++/4" element={<Page path={'/docs/cpp4.md'} />} />
            <Route path="/C++/5" element={<Page path={'/docs/cpp5.md'} />} />
            <Route path="/C++/6" element={<Page path={'/docs/cpp6.md'} />} />
          </Routes>

          <Footerbar />
        </div>
      </Router>
    </>
  );
}

export default App;
