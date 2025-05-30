import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';
import MessageBoard from '../utils/MessageBoard';
import Card from '../utils/Card';

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
      <div className="card-container">
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
      </div>
    </main>
  );
}
