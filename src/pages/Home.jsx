import React, { useState, useEffect } from 'react';
import './Home.css';
import logoDark from '../assets/logo.png';
import logoLight from '../assets/logo0.png';
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
          <p>一個有關程式語言學習的知識分享網站，包含入門教學、課程和操作方法資訊</p>
        </div>
      </div>
      <div className="card-container">
        <Card title="新手入門" description="幫助您了解首次接觸程式所需要的知識" to={'/Introduction'} />
        <Card title="自主練習" description="提供練習題與挑戰，讓您鞏固程式能力" to={'/Exercise'} />
        <Card title="線上實作" description="直接在線上撰寫程式碼並執行" to={'/Compiler'} />
        <Card title="JavaScript" description="學習前端與網頁互動的核心語言 JavaScript" to={'/JavaScript/1'} />
        <Card title="C++" description="探索強大且高效的程式語言" to={'/C++/1'} />
        <Card title="Python" description="簡單易學、用途廣泛的現代程式語言" to={'/Python/1'} />
        <Card title="其它資源" description="連結更多教學平台與學習網站，擴展學習視野" />
        <Card title="關於網站" description="了解這個網站的理念、目標與開發背景" to={'/About'} />
        <Card title="聯絡我們" description="若有任何建議、問題或合作需求，歡迎聯繫我們" />
      </div>
    </main>
  );
}
