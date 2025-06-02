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
    'C++': [
      { name: '入門及環境建置', path: 'C++/1' },
      { name: '基本運算教學', path: 'C++/3' },
      { name: '陣列教學', path: 'C++/2' },
      { name: '迴圈教學', path: 'C++/4' },
      { name: '函式教學', path: 'C++/5' },
      { name: '類別（Class）教學', path: 'C++/6' },
    ],
    Python: [{ name: '入門及環境建置', path: 'Python/1' }],
    JavaScript: [{ name: '入門及環境建置', path: 'JavaScript/1' }],
  };

  return (
    <>
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <ul className="sidebar-nav-links">
          <Glitch as="li">
            <Link to="/">
              <Glitch>首頁</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/Exercise">
              <Glitch>練習</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/Compiler">
              <Glitch>線上編譯器</Glitch>
            </Link>
          </Glitch>
          <Glitch as="li">
            <Link to="/About">
              <Glitch>關於</Glitch>
            </Link>
          </Glitch>
        </ul>
        <hr></hr>
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
