import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ open }) {
  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (topic) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };
  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-content">
          {['語言教學', '練習區塊', '資源分享'].map((title) => (
            <div key={title} className="topic">
              <div className="topic-header" onClick={() => toggleTopic(title)}>
                {title}
                <span>{openTopics[title] ? '▼' : '▶'}</span>
              </div>
              {openTopics[title] && (
                <ul className="subtopics">
                  <li>{title} 子項目1</li>
                  <li>{title} 子項目2</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
