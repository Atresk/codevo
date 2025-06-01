import React, { useState, useEffect } from 'react';
import './Home.css';
import logoDark from '../assets/logo.png';
import logoLight from '../assets/logo0.png';
import MessageBoard from '../utils/MessageBoard';
import Card from '../utils/Card';

export default function Home({ sidebarOpen }) {
  const [theme, setTheme] = useState(document.body.className);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={`home ${sidebarOpen ? 'sidebarOpen' : ''}`}>
      <div className="div1">
        <img src={theme === 'light' ? logoLight : logoDark} className="logo" alt="logo" />
        <div>
          <h1>Codevo</h1>
          <p>一個個人化程式語言學習網站，適合初學者與進階者</p>
        </div>
      </div>
      <div className="card-container">
        <Card title="tst" description="keroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
        <Card title="test" description="ekeroewkof"></Card>
      </div>
    </main>
  );
}
