import React from 'react';
import './Home.css';
import MessageBoard from '../utils/MessageBoard';
import logo from '../assets/logo.png';
import test from './test.jpg'

export default function Home({ sidebarOpen }) {
  return (
    <main className={`home ${sidebarOpen ? 'sidebarOpen' : ''}`}>
      <div className="div1">
        <img src={logo} alt="logo" />
        <div>
          <h1>Codevo</h1>
          <p>一個個人化程式語言學習網站，適合初學者與進階者</p>
        </div>
      </div>
    </main>
  );
}
