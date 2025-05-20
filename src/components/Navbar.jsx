import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <img src={logo} className="logo" alt="logo"/>
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/">首頁</Link></li>
      </ul>

      <div className="right">
        <button onClick={toggleTheme} className="icon-button" title="切換主題">🌙</button>
        <button className="icon-button" title="站內搜尋">🔍</button>
      </div>
    </nav>
  );
}
