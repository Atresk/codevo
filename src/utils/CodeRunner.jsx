import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './CodeRunner.css';

export default function CodeRunner() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('print("Hello, world!")');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
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

  const runCode = async () => {
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch(
        'https://50ae51f2-1645-46fe-a33d-adc91767c317-00-1o186i9hqwglv.sisko.replit.dev/api/run',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            language: language === 'cpp' ? 'cpp' : language === 'javascript' ? 'javascript' : 'python3',
            code,
            stdin: input,
          }),
        },
      );
      const data = await res.json();
      console.log('[前端收到]', data);
      if (data.error) {
        setOutput(data.error);
      } else {
        setOutput(data.run.stdout || data.run.stderr || '無輸出');
      }
    } catch (err) {
      setOutput('執行錯誤');
    }
    setLoading(false);
  };

  return (
    <div className="code-runner">
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          if (e.target.value === 'python3') setCode('print("Hello, world!")');
          else if (e.target.value === 'javascript') setCode('console.log("Hello, world!")');
          else if (e.target.value === 'cpp')
            setCode('#include <iostream>\nint main() { std::cout << "Hello, world!"; return 0; }');
        }}>
        <option value="python3">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
      </select>

      <div className="code-editor">
        <Editor
          height="300px"
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme={theme === 'light' ? 'vs-light' : 'vs-dark'}
        />
      </div>

      <textarea
        className="code-input"
        placeholder="輸入資料（stdin）"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="run-button" onClick={runCode} disabled={loading}>
        {loading ? '執行中...' : '執行程式碼'}
      </button>

      <pre className="output-box">{output}</pre>
    </div>
  );
}
