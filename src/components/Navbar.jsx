import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoDark from '../assets/logo.png';
import logoLight from '../assets/logo0.png';
import Glitch from '../utils/Glitch';
import moonIcon from '../assets/moon.png';
import moonIcon1 from '../assets/moon1.png';

export default function Navbar({ toggleSidebar, sidebarOpen }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
    document.body.className = prefersDark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <button className={`hamburger ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            <span />
            <span />
            <span />
          </button>
          <img src={theme === 'light' ? logoLight : logoDark} className="logo" alt="logo" />
          <h1>Codevo</h1>
        </div>
        <ul className="nav-links">
          <Glitch as="li">
            <Link to="/">
              <Glitch>首頁</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/Exercise">
              <Glitch>學習</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/Compiler">
              <Glitch>線上編譯器</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/About">
              <Glitch>關於</Glitch>
            </Link>
          </Glitch>
        </ul>

        <div className="right">
          <button onClick={toggleTheme} className="theme-toggle" title="切換主題">
            <img src={theme === 'light' ? moonIcon1 : moonIcon} alt="moonIcon" />
          </button>
        </div>
      </nav>
    </>
  );
}
