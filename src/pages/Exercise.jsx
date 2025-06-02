import React from 'react';
import './Exercise.css';
import MarkdownViewer from '../utils/MarkdownViewer';

export default function Exercise() {
  return (
    <main>
      <div className="ex">
        <MarkdownViewer src={'/docs/ex1.md'} />
        <MarkdownViewer src={'/docs/ex2.md'} />
        <MarkdownViewer src={'/docs/ex3.md'} />
        <MarkdownViewer src={'/docs/ex4.md'} />
        <MarkdownViewer src={'/docs/ex5.md'} />
        <MarkdownViewer src={'/docs/ex6.md'} />
      </div>
    </main>
  );
}
