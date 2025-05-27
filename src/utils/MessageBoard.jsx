import React, { useState, useEffect } from 'react';
function MessageBoard() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://50ae51f2-1645-46fe-a33d-adc91767c317-00-1o186i9hqwglv.sisko.replit.dev/api';

  // 讀取留言資料（on load）
  useEffect(() => {
    fetch(`${API_URL}/messages`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('讀取留言失敗', err);
        setLoading(false);
      });
  }, []);

  // 送出留言
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, content }),
    });

    const result = await response.json();
    if (result.success) {
      const newMessage = { name, content };
      setMessages([...messages, newMessage]);
      setName('');
      setContent('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>留言板</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            display: 'block',
            marginBottom: '10px',
            width: '100%',
          }}
        />
        <textarea
          placeholder="留言內容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{
            display: 'block',
            marginBottom: '10px',
            width: '100%',
          }}
        ></textarea>
        <button type="submit">送出留言</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>留言列表：</h3>
        {loading ? (
          <p>載入中...</p>
        ) : messages.length === 0 ? (
          <p>目前沒有留言。</p>
        ) : (
          <ul>
            {messages.map((msg, idx) => (
              <li key={idx}>
                <strong>{msg.name}</strong>：{msg.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MessageBoard;
