import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './MarkdownViewer.css';
export default function MarkdownViewer({ src }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + src)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent('# 無法載入檔案'));
  }, [src]);

  return (
    <div className="markdown-viewer">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
