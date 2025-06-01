import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Glitch from '../utils/Glitch';

export default function Sidebar({ open }) {
  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (topic) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const topics = {
    語言教學: [
      { name: 'Python 入門', path: '/learn/python' },
      { name: 'JavaScript 基礎' },
      { name: 'C++ 語法', path: '/learn/cpp' },
    ],
    練習區塊: [{ name: '變數練習' }, { name: '迴圈挑戰', path: '/practice/loops' }],
    資源分享: [
      { name: '推薦網站', path: '/resources/sites' },
      { name: 'YouTube 頻道' },
      { name: '線上工具', path: '/resources/tools' },
    ],
  };

  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-content">
          {Object.entries(topics).map(([title, subitems]) => (
            <div key={title} className="topic">
              <div className="topic-header" onClick={() => toggleTopic(title)}>
                <Glitch>{title}</Glitch>
                <span>{openTopics[title] ? '▼' : '▶'}</span>
              </div>
              {openTopics[title] && (
                <ul className="subtopics">
                  {subitems.map((item, idx) => (
                    <li key={idx}>
                      {item.path ? (
                        <Link to={item.path}>
                          {item.icon && <span className="icon">{item.icon}</span>}
                          <Glitch>{item.name}</Glitch>
                        </Link>
                      ) : (
                        <span className="no-link">
                          {item.icon && <span className="icon">{item.icon}</span>}
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
