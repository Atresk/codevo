import React from 'react';
import './Footerbar.css';

export default function Footerbar() {
  return (
    <footer className="footerbar">
      <p>© 2025 Codevo. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">關於本站</a>
        <a href="/contact">聯絡我們</a>
        <a href="/docs">使用指南</a>
      </div>
    </footer>
  );
}
