import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <img src={logo} className="logo" alt="logo" />
                    <h1>Codevo</h1>
                </div>

                <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                    <li>
                        <Link to="/">首頁</Link>
                    </li>
                    <li>
                        <Link to="/Page_1">在開始之前</Link>
                    </li>
                </ul>

                <div className="right">
                    <button onClick={toggleTheme} className="icon-button" title="切換主題">
                        🌙
                    </button>
                    <button className="icon-button" title="站內搜尋">
                        🔍
                    </button>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </nav>
            <hr/>
        </>
    );
}
