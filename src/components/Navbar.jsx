import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoDark from '../assets/logo.png';
import logoLight from '../assets/logo0.png';
import Glitch from '../utils/Glitch';

export default function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
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
          <img src={theme === 'light' ? logoLight : logoDark} className="logo" alt="logo" />
          <h1>Codevo</h1>
        </div>

        <ul className={`nav-links ${navMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/">
              <Glitch>首頁</Glitch>
            </Link>
          </li>
          <li>
            <Link to="/Learn">
              <Glitch>學習</Glitch>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Glitch>關於</Glitch>
            </Link>
          </li>
        </ul>

        <div className="right">
          <button onClick={toggleTheme} className="icon-button" title="切換主題">
            🌙
          </button>
          <button className="icon-button" title="站內搜尋">
            🔍
          </button>
          <button className="hamburger" onClick={() => setNavMenuOpen(!navMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>
    </>
  );
}
